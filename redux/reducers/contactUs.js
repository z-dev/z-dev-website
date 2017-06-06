import _ from 'lodash'

const initialState = {
  responsiveMenuOpen: false,
  userName: '',
  userEmail: '',
  userMessage: ''
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'app/TOGGLE_RESPONSIVE_MENU':
      return {...state, responsiveMenuOpen: !state.responsiveMenuOpen}
    default:
      return state
  }
}
