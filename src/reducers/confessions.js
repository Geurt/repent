const confessionsReducerDefaultState = [];

const confessionsReducer = (state = confessionsReducerDefaultState, action) =>  {
    switch (action.type) {
        case 'SET_CONFESSIONS':
            // just for now
            return action.confessions;
        case 'ADD_CONFESSION':
            // just for now
            return state;
        default:
            return state;
    }
}

export default confessionsReducer;
