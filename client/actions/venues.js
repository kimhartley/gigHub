import request from 'superagent'
import { getVenues } from '../apis/venues'

export function getVenueList(venues) {
    return {
        type: 'GET_VENUES',
        venues: venues
    }
}

export function fetchVenues() {
    return (dispatch) => {
            getVenues()
            .then((venues) => {
                dispatch(getVenueList(venues))
            })
    }
}