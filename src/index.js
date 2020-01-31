// Main Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Custom Imports
import store from './store';
import App from './components/App';

// Style Imports
import './index.css';
import './index.scss';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootSelector = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(app, rootSelector);
});
