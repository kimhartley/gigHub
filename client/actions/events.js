import request from 'superagent'
import { getEvents } from '../apis/events'

export function getEventList(events) {
    return {
        type: 'GET_EVENTS',
        events: events
    }
}

export function fetchEvents() {
    return (dispatch) => {
            getEvents()
            .then((events) => {
                dispatch(getEventList(events))
            })
    }
}

