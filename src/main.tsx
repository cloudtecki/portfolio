import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'core/store/configureStore';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    {/* <StoreProvider store={store}> */}
    <App />
    {/* </StoreProvider> */}
  </React.StrictMode>
);
