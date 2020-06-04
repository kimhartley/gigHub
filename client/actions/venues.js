import request from 'superagent'
import { getVenueList } from '../apis/venues'

export function getVenueList(venue) {
    return {
        type: 'GET_VENUES',
        venues: venues
    }
}

export function fetchVenues() {
    return (dispatch) => {
            getVenueList()
            .then((venues) => {
                dispatch(getVenueList(venues))
            })
    }
}