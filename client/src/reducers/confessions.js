const confessionsReducerDefaultState = [];

const confessionsReducer = (state = confessionsReducerDefaultState, action) =>  {
    switch (action.type) {
        case 'SET_CONFESSIONS':
            return action.confessions;
        case 'ADD_CONFESSION':
            return [action.confession, ...state];
        case 'UPDATE_CONFESSION':
            const newState = state.map((c) => c === action.confession ? action.updatedConfession : c);
            return newState
        default:
            return state;
    }
}

export default confessionsReducer;
