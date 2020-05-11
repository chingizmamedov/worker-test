// install event
self.addEventListener("install", (evt) => {
  console.log("service worker installed", evt);
});

// activate event -- new
self.addEventListener("activate", (evt) => {
  console.log("service worker activated", evt);
});

// fetch events
self.addEventListener("fetch", (evt) => {
  console.log("evt", evt);
});
