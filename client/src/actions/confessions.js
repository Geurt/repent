// action generators
export const setConfessions = (confessions = []) => {
    return {
        type: 'SET_CONFESSIONS',
        confessions
    }
}

export const addConfession = (confession) => {
    return {
        type: 'ADD_CONFESSION',
        confession
    }
}
