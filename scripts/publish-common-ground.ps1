param(
  [switch]$DryRun,
  [string[]]$Files = @(
    "daily-sets-reviewed.js",
    "index.html",
    "app.js",
    "sw.js",
    "manifest.webmanifest",
    "social-post-today.png"
  ),
  [string]$Owner = "thefullrob",
  [string]$Repo = "Common-Ground",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
$Gh = "C:\Program Files\GitHub CLI\gh.exe"

if (-not (Test-Path -LiteralPath $Gh)) {
  throw "GitHub CLI was not found at $Gh"
}

function Normalize-Base64 {
  param([string]$Value)
  return ($Value -replace "\s", "")
}

function Test-TextFile {
  param([string]$RepoPath)

  $extension = [System.IO.Path]::GetExtension($RepoPath).ToLowerInvariant()
  return @(".html", ".js", ".css", ".json", ".webmanifest", ".md", ".txt", ".yml", ".yaml").Contains($extension)
}

function Normalize-Text {
  param([string]$Value)
  return (($Value -replace "`r`n", "`n") -replace "`r", "`n")
}

function Get-RemoteFile {
  param([string]$RepoPath)

  $previousErrorActionPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  try {
    $result = & $Gh api "repos/$Owner/$Repo/contents/$RepoPath`?ref=$Branch" 2>$null
    $exitCode = $LASTEXITCODE
  }
  finally {
    $ErrorActionPreference = $previousErrorActionPreference
  }

  if ($exitCode -ne 0) {
    return $null
  }
  return ($result | ConvertFrom-Json)
}

function Update-RemoteFile {
  param(
    [string]$RepoPath,
    [string]$LocalPath,
    [string]$Content,
    [object]$Remote
  )

  $body = @{
    message = "Publish Common Ground update: $RepoPath"
    content = $Content
    branch = $Branch
  }

  if ($Remote -and $Remote.sha) {
    $body.sha = $Remote.sha
  }

  $payloadPath = [System.IO.Path]::GetTempFileName()
  try {
    $json = $body | ConvertTo-Json -Depth 5 -Compress
    [System.IO.File]::WriteAllText($payloadPath, $json, [System.Text.UTF8Encoding]::new($false))
    $response = & $Gh api -X PUT "repos/$Owner/$Repo/contents/$RepoPath" --input $payloadPath
    if ($LASTEXITCODE -ne 0) {
      throw "GitHub upload failed for $RepoPath"
    }

    $commit = ($response | ConvertFrom-Json).commit.sha
    Write-Host "UPDATED $RepoPath $commit"
  }
  finally {
    Remove-Item -LiteralPath $payloadPath -Force -ErrorAction SilentlyContinue
  }
}

$changed = 0
$checked = 0

foreach ($repoPath in $Files) {
  $localPath = Join-Path $Root $repoPath
  if (-not (Test-Path -LiteralPath $localPath)) {
    Write-Host "MISSING $repoPath"
    continue
  }

  $checked += 1
  $localBytes = [System.IO.File]::ReadAllBytes($localPath)
  $localContent = [Convert]::ToBase64String($localBytes)
  $remote = Get-RemoteFile -RepoPath $repoPath
  $remoteContent = if ($remote) { Normalize-Base64 $remote.content } else { "" }
  $hasSameContent = $false

  if ($remote) {
    if (Test-TextFile -RepoPath $repoPath) {
      $localText = [System.Text.Encoding]::UTF8.GetString($localBytes)
      $remoteText = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($remoteContent))
      $hasSameContent = (Normalize-Text $localText) -eq (Normalize-Text $remoteText)
    }
    else {
      $hasSameContent = $remoteContent -eq $localContent
    }
  }

  if ($hasSameContent) {
    Write-Host "UNCHANGED $repoPath"
    continue
  }

  $changed += 1
  if ($DryRun) {
    Write-Host "WOULD UPDATE $repoPath"
  }
  else {
    Update-RemoteFile -RepoPath $repoPath -LocalPath $localPath -Content $localContent -Remote $remote
  }
}

if ($DryRun) {
  Write-Host "DRY RUN complete. Checked $checked file(s); $changed would update."
}
else {
  Write-Host "Publish complete. Checked $checked file(s); $changed updated."
}
