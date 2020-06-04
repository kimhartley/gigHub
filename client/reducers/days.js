function days (state=[], action) {
    
    switch (action.type) {
        case 'GET_DAYS':
            return action.days
        default:
            return state
    }
}

export default days