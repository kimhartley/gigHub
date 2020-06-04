function events (state=[], action) {
    
    switch (action.type) {
        case 'GET_EVENT':
            return action.events
        default:
            return state
    }
}

export default events