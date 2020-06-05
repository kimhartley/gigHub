import request from 'superagent'
import { getDays } from '../apis/days'

export function getDayList(days) {
    return {
        type: 'GET_DAYS',
        days: days
    }
}

export function fetchDays() {
    return (dispatch) => {
            getDays()
            .then((days) => {
                dispatch(getDayList(days))
            })
    }
}