// Install service worker
self.addEventListener("install", event => {
  console.log("Service worker has been installed")
});

// Active event
self.addEventListener("activate", event => {
  console.log("Service worker has been activated");
});

// Fetch event
self.addEventListener("fetch", event => {
  // console.log("Fetch event", event);
});