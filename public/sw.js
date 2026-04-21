const CACHE_NAME = "dental-cache-v1";

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
});

// fetch
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // navigation requests → network first
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // images → cache first
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

  // default → network first
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});