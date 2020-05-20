// api calls here

export const fetchConfessions = () => {
    // this is async; returns a thunk
    return (dispatch) => {  // thunks get called with dispatch (and getState)
        // TODO: dispatch some fetchConfessionsPending here setting a loader
        fetch('./confessions')
            .then(handleErrors)         // fetch doesn't handle errors on its own
            .then(res => res.json())
            .then(json => {
                dispatch(setConfessions(json));
            })
            .catch(error => {
                // TODO: handle errors with a failure action
            });
    }
}

export const postConfession = (confession = {}) => {
    // this is async; returns a thunk
    return (dispatch) => {
        // post the confession
        // TODO: dispatch some postConfessionsPending here setting a loader
        fetch('./confessions', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(confession)
        })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            // update the store with response
            dispatch(addConfession(json))
            // note: for a single source of truth, you might change this to a
            // compolete new get all confessions call
        })
        .catch(error => {
            // TODO: handle errors with a failure action
        });
    }
}

// error handler for fetch calls
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response
}


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
