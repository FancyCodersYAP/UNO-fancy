import { GlobalStyle } from './styles/global';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';
import { DataService } from './api/DataService';
import { ApiRepository } from './repository/ApiRepository';
import { ThemeContextProvider } from 'contexts/ThemeContext';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={setupStore(new DataService(new ApiRepository()))}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      <GlobalStyle />
    </Provider>
  </BrowserRouter>
);
