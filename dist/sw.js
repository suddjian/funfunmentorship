self.addEventListener('fetch', function(event) {
    caches.open('images')
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
          })
      );
});