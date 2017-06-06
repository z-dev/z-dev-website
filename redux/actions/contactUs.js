import 'common/initialiseFirebase.js'
import firebase from 'firebase'
import moment from 'moment'

export const updateName = inputValue => {
  return { type: 'contactUs/UPDATE_NAME', payload: inputValue }
}

export const updateEmail = inputValue => {
  return { type: 'contactUs/UPDATE_EMAIL', payload: inputValue }
}

export const updateMessage = inputValue => {
  return { type: 'contactUs/UPDATE_MESSAGE', payload: inputValue }
}
export const sendMessage = messageData => {
  firebase.database().ref(`/projectQueries`).push({ ...messageData, timeStamp: moment().format('YYMMDDHHmmss') })
  return { type: 'contactUs/SEND_MESSAGE' }
}
