const CACHE_NAME = 'common-ground-v41';
const ASSETS = [
  '/icon-192.png?v=20260320a',
  '/icon-512.png?v=20260320a'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // Never intercept media: iOS Safari streams video with Range requests, and
  // answering those from a cache-first handler breaks playback (black video).
  const lowerPath = url.pathname.toLowerCase();
  if (
    event.request.headers.has('range') ||
    event.request.destination === 'video' ||
    event.request.destination === 'audio' ||
    lowerPath.endsWith('.mp4') ||
    lowerPath.endsWith('.m4a') ||
    lowerPath.endsWith('.mov')
  ) return;
  const isSameOrigin = url.origin === self.location.origin;
  const isFreshnessCritical =
    isSameOrigin &&
    (event.request.mode === 'navigate' ||
      url.pathname === '/' ||
      url.pathname.endsWith('/index.html') ||
      url.pathname.endsWith('/app.js') ||
      url.pathname.endsWith('/daily-sets-reviewed.js') ||
      url.pathname.endsWith('/manifest.webmanifest'));

  if (isFreshnessCritical) {
    const freshRequest = new Request(event.request, { cache: 'no-store' });
    event.respondWith(
      fetch(freshRequest)
        .then((response) => {
          if (!response || !response.ok) throw new Error('Fresh fetch failed');
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});



