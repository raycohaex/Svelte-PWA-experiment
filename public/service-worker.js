importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  workbox.routing.registerRoute(
      ({request}) => request.destination == 'assets',
      new workbox.strategies.CacheFirst()
  );

  // self.addEventListener('install', function(event) {
  //   event.waitUntil(
  //     caches.open('offline-v1').then(function(cache) {
  //       return cache.addAll(
  //         [
  //           '/',
  //           'index.html',
  //           'build/bundle.css',
  //           'build/bundle.js',
  //           'build/bundle.js.map'
  //         ]
  //       );
  //     })
  //   );
  // });

  // self.addEventListener('fetch', function(event) {
  //   event.respondWith(
  //     caches.open('offline-v1').then(function(cache) {
  //       return cache.match(event.request).then(function (response) {
  //         return response || fetch(event.request).then(function(response) {
  //           cache.put(event.request, response.clone());
  //           return response;
  //         });
  //       });
  //     })
  //   );
  // });
