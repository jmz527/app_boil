import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

const app = (<App />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(app, div);
  ReactDOM.unmountComponentAtNode(div);
});
