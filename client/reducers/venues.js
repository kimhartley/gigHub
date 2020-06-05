function venues (state=[], action) {
    
    switch (action.type) {
        case 'GET_VENUES':
            return action.venues
        default:
            return state
    }
}

export default venues