const CACHE_NAME = 'apple-redesign-v1'
const urlsToCache = [
  '/',
  '/store',
  '/mac',
  '/ipad',
  '/iphone',
  '/watch',
  '/airpods',
  '/tv',
  '/support',
  '/bag'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})