self.addEventListener('fetch', function(event) {
    var discourseUrl = 'https://discourse-cdn-sjc1.com/'
    if (event.request.url.includes(discourseUrl)) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || 
                
                fetch(event.request)
                .then(function(response) {
                    return caches.open('images').then(function(cache) {
                    cache.put(event.request.url, response.clone());
                    return response;
                    });
                })
            })
        );
    }
});