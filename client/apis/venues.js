import request from 'superagent'

export const venuesUrl = '/api/v1/venues'

export function getVenueList () {
  return request.get(venuesUrl)
  .then(res => res.body)
  
}
