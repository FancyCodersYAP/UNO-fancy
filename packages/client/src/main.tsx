import { GlobalStyle } from './styles/global';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);

startServiceWorker();
