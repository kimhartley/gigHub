import request from 'superagent'
import { getEventList } from '../apis/events'

export function getEventList(events) {
    return {
        type: 'GET_EVENT',
        events: events
    }
}

export function fetchEvent() {
    return (dispatch) => {
            getEventList()
            .then((events) => {
                dispatch(getEventList(events))
            })
    }
}

