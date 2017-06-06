import 'common/initialiseFirebase.js'
import firebase from 'firebase'
import moment from 'moment'

export const handleNameChange = (inputValue) => {
  return {type: 'contactUs/HANDLE_NAME_CHANGE', payload: inputValue}
}

export const handleEmailChange = (inputValue) => {
  return {type: 'contactUs/HANDLE_EMAIL_CHANGE', payload: inputValue}
}

export const handleMessageChange = (inputValue) => {
  return {type: 'contactUs/HANDLE_MESSAGE_CHANGE', payload: inputValue}
}
export const onSendMessageClick = (messageData) => {
  const timeStamp = moment().format('YYMMDDHHmmss')
  firebase.database().ref(`/projectQueries`).push({...messageData, timeStamp: [timeStamp]})
  return {type: 'contactUs/HANDLE_SEND_MESSAGE_CLICK'}
}
