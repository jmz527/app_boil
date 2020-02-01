// Main Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Custom Imports
import App from './components/App';

// Style Imports
import './index.css';
import './index.scss';

const app = (<App />);

const rootSelector = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(app, rootSelector);
});
