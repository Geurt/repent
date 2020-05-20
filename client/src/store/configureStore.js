import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import confessionsReducer from '../reducers/confessions';

// this is just because we want to use redux devtools with thunk:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        confessionsReducer,
        // without redux devtools, applying middleware is simple:
        // applyMiddleware(thunk),
        // with redux devtools howerver (see above for definition):
        composeEnhancers(applyMiddleware(thunk))
    );
}
