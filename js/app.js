if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceWorker.js")
    .then(reg => console.log("Service Worker has registed"))
    .catch(err => console.log("Service Worker has not registed", err));
}