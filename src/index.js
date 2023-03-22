import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { GlobalStyles, theme } from './styles/index';
import { store, persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter basename="/petly-site">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
