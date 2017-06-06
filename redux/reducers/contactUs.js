import _ from 'lodash'

const initialState = {
  userName: '',
  userEmail: '',
  userMessage: ''
}

export default function contactUs(state = initialState, action) {
  switch (action.type) {
    case 'contactUs/HANDLE_NAME_CHANGE':
      return {...state, userName: action.payload}
    case 'contactUs/HANDLE_EMAIL_CHANGE':
      return {...state, userEmail: action.payload}
    case 'contactUs/HANDLE_MESSAGE_CHANGE':
      return {...state, userMessage: action.payload}
    case 'contactUs/HANDLE_SEND_MESSAGE_CLICK':
      return {...state, userName: '', userEmail: '', userMessage: ''}
    default:
      return state
  }
}
