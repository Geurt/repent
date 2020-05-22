import { combineReducers } from 'redux';
import confessionsReducer from './confessions';
import filtersReducer from './filters';

const reducer = combineReducers({
    confessions: confessionsReducer,
    filter: filtersReducer
});
// note: now the state of confessionsReducer will be available as
// state.confessions on the global state, etc.

export default reducer;
