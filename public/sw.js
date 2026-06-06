const CACHE_NAME = 'water-suite-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png'
];

// Installs service worker and caches shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching offline app shell');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Cleans up stale versions of caches on activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting obsolete cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch interception and speed optimization strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Focus only on local HTTP/S requests
  if (!url.protocol.startsWith('http')) return;

  // Let browser-sync or socket-based utilities pass unintercepted
  if (url.pathname.includes('/socket.io') || url.pathname.includes('websocket')) {
    return;
  }

  // Speed Strategy: Stale-While-Revalidate for app's assets & code bundles
  // This serves cached resources instantly while updating cache in the background.
  if (
    url.origin === self.location.origin && 
    (url.pathname.includes('/assets/') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css') || url.pathname.endsWith('.png') || url.pathname.endsWith('.svg') || url.pathname.endsWith('.json'))
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(req).then((cachedResponse) => {
          const fetchPromise = fetch(req).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(req, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Handle silent fetch failures
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // Fallback Strategy: Network-First for main documents (to guarantee latest version when online, and offline fallback when off-grid)
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        // Cache successful responses for offline use
        if (networkResponse && networkResponse.status === 200 && url.origin === self.location.origin) {
          const responseCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseCopy);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Offline: Serve from cache
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If offline and request is a navigation page, serve index.html shell
          if (req.mode === 'navigate') {
            return caches.match('/');
          }
        });
      })
  );
});
