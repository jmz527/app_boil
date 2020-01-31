import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import store from '../../store';

import { Provider } from 'react-redux';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(app, div);
  ReactDOM.unmountComponentAtNode(div);
});
