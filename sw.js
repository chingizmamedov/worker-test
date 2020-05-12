const cacheName = "v1"

const assets = [
  "/",
  "index.html",
  "/css/style.css",
  "/js/script.js"
]


// install event
self.addEventListener("install", (evt) => {
  console.log("service worker installed", evt);

  evt.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        assets
      );
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  console.log("service worker activated", evt);
});

// fetch events
self.addEventListener("fetch", (evt) => {
  console.log("evt", evt);
  evt.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(evt.request).then(function (response) {
        return response || fetch(evt.request).then(function(response) {
          cache.put(evt.request, response.clone());
          return response;
        });
      });
    })
  );
});
