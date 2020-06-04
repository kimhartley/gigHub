function venues (state=[], action) {
    
    switch (action.type) {
        case 'GET_VENUE':
            return action.venues
        default:
            return state
    }
}

export default venues