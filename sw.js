const CACHE_NAME = 'common-ground-v3';
const ASSETS = [
  './',
  './index.html',
  './app.js?v=20260313',
  './daily-sets-reviewed.js?v=20260313',
  './manifest.webmanifest?v=20260313b',
  './icon-192.png?v=20260313b',
  './icon-512.png?v=20260313b'
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


