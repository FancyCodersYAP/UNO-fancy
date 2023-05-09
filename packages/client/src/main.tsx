import { GlobalStyle } from './styles/global';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';
import { UserService } from './api/UserService';
import { YandexAPIRepository } from './repository/YandexAPIRepository';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { startServiceWorker } from 'utils/startSW';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={setupStore(new UserService(new YandexAPIRepository()))}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      <GlobalStyle />
    </Provider>
  </BrowserRouter>
);

startServiceWorker();
