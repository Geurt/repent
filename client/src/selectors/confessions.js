export default (confessions, filter) => {
    // watch it here! sort is destructive
    // and since you let this selector operate on state directly, it would mutate state
    // (this would prevent React rerendering; since react compares the new to the old state 
    // - but you'd have changed the old state too! so no render would be triggered)
    // solutions: array.slice().sort() or [...array].sort()
    if (filter === 'latest') {
        return confessions.slice().sort((a, b) => {
            return a.createdAt < b.createdAt ? 1 : -1
        })
    }
    if (filter === 'worst') {
        return confessions.slice().sort((a, b) => {
            const badnessA = a.unforgivenCount - a.forgivenCount;
            const badnessB = b.unforgivenCount - b.forgivenCount;
            return badnessB - badnessA
        })
    }
}