const initialState = {
  userName: '',
  userEmail: '',
  userMessage: '',
}

export default function contactUs(state = initialState, action) {
  switch (action.type) {
    case 'contactUs/UPDATE_NAME':
      return { ...state, userName: action.payload }
    case 'contactUs/UPDATE_EMAIL':
      return { ...state, userEmail: action.payload }
    case 'contactUs/UPDATE_MESSAGE':
      return { ...state, userMessage: action.payload }
    case 'contactUs/SEND_MESSAGE':
      return { ...state, ...initialState }
    default:
      return state
  }
}
