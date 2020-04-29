const confessionsReducerDefaultState = [];

const confessionsReducer = (state = confessionsReducerDefaultState, action) =>  {
    switch (action.type) {
        case 'SET_CONFESSIONS':
            // just for now
            return action.confessions;
        case 'ADD_CONFESSION':
            return [action.confession, ...state];
        default:
            return state;
    }
}

export default confessionsReducer;
