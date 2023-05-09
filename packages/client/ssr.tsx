import App from './src/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { setupStore } from './src/store/store';
import { Provider } from 'react-redux';
import { UserService } from './src/api/UserService';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { fetchAuthUserGet } from './src/store/User/auth/actions';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { GlobalStyle } from './src/styles/global';

async function render(uri, repository, cookies) {
  const store = setupStore(new UserService(repository));
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
