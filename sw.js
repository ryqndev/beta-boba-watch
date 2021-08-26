const cacheName = 'boba-watch-v3.0.0';

const files = [
    '/bobawatch.png',
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(files);
    })());
});
