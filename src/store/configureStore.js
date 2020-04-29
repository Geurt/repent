import { createStore } from 'redux';
import confessionsReducer from '../reducers/confessions';

export default () => {
    return createStore(
        confessionsReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
