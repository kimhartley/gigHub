function event (state=[], action) {
    
    switch (action.type) {
        case 'GET_EVENT':
            return action.event
        default:
            return state
    }
}

export default event