import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';

import {Provider} from 'react-redux'
import './index.css';
import reducers from './reducers';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';



let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)

);

ReactDOM.render(
  <Provider store={store}>
  <App />
 </Provider> ,
  document.querySelector('.root'));


registerServiceWorker();
