// These two module are separated form @babel/polyfill which is used for lower babel versions
import 'core-js/stable';
import 'core-js/modules/es.symbol';
import 'regenerator-runtime/runtime';

import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
render(
  <Provider store={store}>
    <App />{' '}
  </Provider>,
  document.getElementById('root')
);
