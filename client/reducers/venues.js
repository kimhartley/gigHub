function venue (state=[], action) {
    
    switch (action.type) {
        case 'GET_VENUE':
            return action.venue
        default:
            return state
    }
}

export default venue