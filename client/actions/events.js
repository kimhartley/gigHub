import request from 'superagent'
import { getEvents, getEventById } from '../apis/events'

export function getEventList(events) {
    return {
        type: 'GET_EVENTS',
        events: events
    }
}

export function setEvent(event){
    return {
        type: 'SET_EVENT',
        event
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

export function setEventById(){
    return (dispatch) => {
        setEvent(event)
        .then(event =>{
            dispatch(getEventById(event.id))
        })
    }
}

