const CACHE_NAME = "dental-cache-v2";

// install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/offline.html",
      ]);
    })
  );
  self.skipWaiting();
});

// activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// fetch
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          return response;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match("/");

          // homepage fallback
          if (cached) return cached;

          // final fallback
          return cache.match("/offline.html");
        })
    );
    return;
  }

  if (request.destination === "image") {
    event.respondWith(
      caches.match(request).then((response) => {
        return (
          response ||
          fetch(request).then((res) => {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
            return res;
          })
        );
      })
    );
    return;
  }

  // 🌐 DEFAULT
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});