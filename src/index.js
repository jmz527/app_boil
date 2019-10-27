// Main Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Custom Imports
import store from './store';
import App from './containers/app.js';
import ErrorBoundary from '~/components/ErrorBoundary';

// Style Imports
import './index.css';
import './index.scss';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary><App /></ErrorBoundary>
    </BrowserRouter>
  </Provider>
);

const rootSelector = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(app, rootSelector);
});
