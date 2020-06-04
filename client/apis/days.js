import request from 'superagent'

export const daysUrl = '/api/v1/days'

export function getDays () {
  return request.get(daysUrl)
  .then(res => res.body)
  
}