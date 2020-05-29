import request from 'superagent'
import { getEventList } from '../apis/events'

export function getEventList(event) {
    return {
        type: 'GET_EVENT',
        event: event
    }
}

export function fetchEvent() {
    return (dispatch) => {
            getEventList()
            .then((eventsList) => {
                dispatch(getEventList(eventsList))
            })
    }
}

