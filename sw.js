const version = 'boba-watch-v3.0.2';

const files = [
    '/bobawatch.png',
    '/static/js/8.9d4c8fc4.chunk.js',
    '/static/js/0.b4f8cb88.chunk.js',
    '/static/js/1.5ca96dd9.chunk.js',
    '/static/js/12.c7753ad7.chunk.js',
    '/static/js/14.4433030a.chunk.js',
    '/static/js/17.847b677e.chunk.js',
    '/static/js/2.64b8b4de.chunk.js',
    '/static/js/3.f63d7041.chunk.js',
    '/static/js/main.b3b7dd7e.chunk.js',

    '/static/css/main.11125b76.chunk.css'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(version);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(files);
    })());

    console.log(caches);
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  });

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then(keyList => {
        Promise.all(keyList.forEach((key) => {
            console.log("removing cache", key)
            if (key === version) return;
            caches.delete(key);
        }));
    }));
});
