import _ from 'lodash'

const initialState = {
  menuCollapsed: true,
}

export default function header(state = initialState, action) {
  switch (action.type) {
    case 'header/TOGGLE_RESPONSIVE_MENU':
      return {...state, menuCollapsed: !state.menuCollapsed}
    case 'header/ON_RESPONSIVE_MENU_CLICK':
      return {...state, menuCollapsed: true}
    default:
      return state
  }
}
