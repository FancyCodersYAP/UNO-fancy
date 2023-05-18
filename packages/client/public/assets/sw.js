const CACHE_NAME = 'uno-v1';

const URLS = [
  '/',
  '/assets/sounds/card-movement.mp3',
  '/assets/sounds/finish.mp3',
  '/assets/sounds/music.mp3',
  '/assets/sounds/skip-uno.mp3',
  '/assets/sounds/uno.mp3',
  '/assets/img/background.png',
  '/assets/img/colorLogo.png',
  '/assets/img/logo.png',
  '/assets/img/start-game-1.jpg',
  '/assets/img/start-game-2.jpg',
  '/assets/img/start-game-3.jpg',
  '/assets/icons/default-avatar.svg',
  '/assets/icons/icons_sprite.svg',
  '/assets/icons/medal.svg',
  '/assets/icons/status-bar_sprite.svg',
];

const responseBody = `<h3>Проверьте подключение к интернету и повторите попытку</h3>`;
const offlineResponse = new Response(responseBody, {
  headers: { 'Content-Type': 'text/html; charset=utf-8' },
});

/* Выполняется всякий раз, когда новый код SW загружается в браузер */
self.addEventListener('install', async event => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(URLS);
});

/* Событие активации происходит после события установки и используется для очистки всех старых кэшей SW */
self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys();
  /* Если версия кэша будет обновлена, все существующие кэши, не соответствующие новому значению, будут удалены */
  await Promise.all(
    cacheNames
      .filter(name => name !== CACHE_NAME)
      .map(name => caches.delete(name))
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  if (!request.url.startsWith('http')) {
    return;
  }

  event.respondWith(networkFirst(request));
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    /* Если мы получили данные сервера, то нужно их занести в кэш */
    if (response && response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (e) {
    console.warn('SW: network problem', e);
    /* Если мы не можем получить данные с сервера, проверяем в кэше */
    const cached = await caches.match(request);
    /* Но если нет сети и нет данных в кэше, то показываем страницу "оффлайн" */
    return cached ?? offlineResponse;
  }
}
