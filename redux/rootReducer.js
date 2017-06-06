import { combineReducers } from 'redux'
import header from './reducers/header.js'
import contactUs from './reducers/contactUs.js'

const rootReducer = combineReducers({
  header,
  contactUs,
})

export default rootReducer
