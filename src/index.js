// Main Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Custom Imports
import App from './components/App';
import ErrorBoundary from '~/components/ErrorBoundary';

// Style Imports
import './index.css';
import './index.scss';

const app = (
  <BrowserRouter>
    <ErrorBoundary><App /></ErrorBoundary>
  </BrowserRouter>
);

const rootSelector = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(app, rootSelector);
});
