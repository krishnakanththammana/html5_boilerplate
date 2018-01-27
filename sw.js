importScripts('/cache-polyfill.js');

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('html5_boilerplate').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/normalize.css',
                '/js/vendor/jquery-3.2.1.min.js',
                '/js/vendor/modernizr-3.5.0.min.js',
                '/bootstrap-4.0.0-dist/css/bootstrap.min.css',
                '/bootstrap-4.0.0-dist/js/bootstrap.min.js',
                '/js/plugins.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
