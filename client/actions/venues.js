import request from 'superagent'
import { getVenueList } from '../apis/venues'

export function getVenueList(venue) {
    return {
        type: 'GET_VENUE',
        venue: venue
    }
}

export function fetchVenue() {
    return (dispatch) => {
            getVenueList()
            .then((venuesList) => {
                dispatch(getVenueList(venuesList))
            })
    }
}