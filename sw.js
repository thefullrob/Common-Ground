const CACHE_NAME = 'common-ground-v6';
const ASSETS = [
  '/Common-Ground/',
  '/Common-Ground/index.html',
  '/Common-Ground/app.js?v=20260316b',
  '/Common-Ground/daily-sets-reviewed.js?v=20260316b',
  '/Common-Ground/manifest.webmanifest?v=20260316b',
  '/Common-Ground/icon-192.png?v=20260313c',
  '/Common-Ground/icon-512.png?v=20260313c'
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
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});



