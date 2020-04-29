import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';
import { setConfessions } from './actions/confessions';
import confessions from './test-data/fixtures';  // just for testing

const store = configureStore(); // here reducers are set

// let's set some confessions for now; this will be relaced with a database call
store.dispatch(setConfessions(confessions));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
