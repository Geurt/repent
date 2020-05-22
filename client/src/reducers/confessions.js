const confessionsReducerDefaultState = [];

// note that this deals only with part of the state
// combineReducers will make this available as state.confessions
const confessionsReducer = (state = confessionsReducerDefaultState, action) =>  {
    switch (action.type) {
        case 'SET_CONFESSIONS':
            return action.confessions;
        case 'ADD_CONFESSION':
            return [action.confession, ...state];
        case 'UPDATE_CONFESSION':
            const newState = state.map((c) => c === action.confession ? action.updatedConfession : c);
            return newState;
        default:
            return state;
    }
}

export default confessionsReducer;
