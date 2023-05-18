export const startServiceWorker = () => {
  // Проверка поддержки браузером service worker'а.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('assets/sw.js')
        .then(registration => {
          console.log(
            'ServiceWorker registration successful with  scope: ',
            registration.scope
          );
        })
        .catch(error => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
};
