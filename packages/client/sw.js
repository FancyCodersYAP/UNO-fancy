const CACHE_NAME = 'uno-v1';

const URLS = [
  '/',
  '/index.html'
];

const responseBody = `<h3>Проверьте подключение к интернету и повторите попытку</h3>`;
const offlineResponse = new Response(responseBody, {
  headers: {'Content-Type': 'text/html; charset=utf-8'}
});

/* Выполняется всякий раз, когда новый код SW загружается в браузер */
self.addEventListener('install', event => {
  event.waitUntil(
    caches
    .open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(URLS);
    })
    .catch(error => {
      throw error;
    })
  )
});

/* Событие активации происходит после события установки и используется для очистки всех старых кэшей SW */
self.addEventListener('activate', event => {
  event.waitUntil(
    /* Если версия кэша будет обновлена, все существующие кэши, не соответствующие новому значению, будут удалены */
    caches.keys()
    .then(cacheNames => {
      return Promise.all(
        cacheNames
        .filter(name => name !== CACHE_NAME)
        .map(name => caches.delete(name))
      )
    })
  )
})

self.addEventListener('fetch', event => {
  const { request } = event;

  event.respondWith(networkFirst(request));
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    /* Если мы получили данные сервера, то нужно их занести в кэш */
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    /* Если мы не можем получить данные с сервера, проверяем в кэше */
    const cached = await caches.match(request);
    /* Но если нет сети и нет данных в кэше, то показываем страницу "оффлайн" */
    return cached ?? offlineResponse;
  }
}
