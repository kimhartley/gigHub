import {combineReducers} from 'redux'

import auth from './auth'
import days from './days'
import venues from './venues'
import events from './events'

export default combineReducers({
  auth,
  days,
  venues,
  events
})