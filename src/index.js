// These two module are separated form @babel/polyfill which is used for lower babel versions
import "core-js/modules/es.symbol";
import "core-js/stable";
import { render } from 'react-dom';
import "regenerator-runtime/runtime";
import App from './App';
render(<App />
, document.getElementById('root'))
