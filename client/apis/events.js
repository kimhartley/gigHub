import request from 'superagent'

export const eventsUrl = '/api/v1/events'

export function getEvents () {
  return request.get(eventsUrl)
  .then(res => res.body)
  
}