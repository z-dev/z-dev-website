import { combineReducers } from 'redux'
import Header from './reducers/header.js'
import ContactUs from './reducers/contactUs.js'


const rootReducer = combineReducers({
  Header,
  ContactUs
})

export default rootReducer
