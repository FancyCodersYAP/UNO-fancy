import App from './src/App';
import { matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { setupStore } from './src/store/store';
import { Provider } from 'react-redux';
import { DataService } from './src/api/DataService';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { fetchAuthUserGet } from './src/store/User/auth/actions';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { GlobalStyle } from './src/styles/global';
import { routes } from './src/routes/routes';

async function render(uri: string, repository, cookies) {
  const store = setupStore(new DataService(repository));
  const [pathname] = uri.split('?');
  const currentRoute = routes.find(route => matchPath(pathname, route.path));
  if (currentRoute) {
    //TODO временное условие нужно заполнить все роуты приложения
    const { loader } = currentRoute;
    if (loader) {
      await loader(store.dispatch);
    }
  }

  await store.dispatch(fetchAuthUserGet());
  const sheet = new ServerStyleSheet();

  const initialState = store.getState();
  const AppNode = () => (
    <StaticRouter location={uri}>
      <Provider store={store}>
        <ThemeContextProvider cookies={cookies}>
          <App />
        </ThemeContextProvider>
        <GlobalStyle />
      </Provider>
    </StaticRouter>
  );
  const renderResult = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <AppNode />
    </StyleSheetManager>
  );
  const css = sheet.getStyleTags();

  sheet.seal();

  return [initialState, renderResult, css];
}

export { render };
