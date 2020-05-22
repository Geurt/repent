const filtersReducerDefaultState = 'latest';

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_LATEST_FILTER':
            return 'latest'
        case 'SET_WORST_FILTER':
            return 'worst'
        default:
            return state
    }
}

export default filtersReducer;
