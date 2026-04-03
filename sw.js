const CACHE_NAME = 'common-ground-v34';
const ASSETS = [
  '/',
  '/index.html',
  '/app.js?v=20260403a',
  '/daily-sets-reviewed.js?v=20260403b',
  '/manifest.webmanifest?v=20260403b',
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
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});



