import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import AppStore from './store/AppStore';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={AppStore}>
    <App />
  </Provider>
);
