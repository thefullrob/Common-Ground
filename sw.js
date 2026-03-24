const CACHE_NAME = 'common-ground-v16';
const ASSETS = [
  '/',
  '/index.html',
  '/app.js?v=20260324c',
  '/daily-sets-reviewed.js?v=20260324a',
  '/manifest.webmanifest?v=20260320a',
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
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});



