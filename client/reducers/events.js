function events (state=[], action) {
    
    switch (action.type) {
        case 'GET_EVENTS':
            return action.events
        case 'SET_EVENT':
            return action.event
        default:
            return state
    }
}

export default events