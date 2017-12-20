import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

//Root Component and Root Reducer
import App from './components/App';
import reducers from './reducers';

//for testing:
import axios from 'axios';
window.axios = axios;

/*create redux store with reducers/index.js, an empty object as
the initial state, and the reduxThunk middleware */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/* Provider component wraps the root component and passes down the store
through the store property. Provider component is then dropped into the
html document and set inside the elemt with an id of 'root'*/
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
