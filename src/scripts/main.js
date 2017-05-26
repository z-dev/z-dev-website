import smoothScroll from 'smooth-scroll'
// eslint-disable-next-line
import 'imports?jQuery=jquery!bootstrap-sass'
import dropdownToggleSetup from './dropDownToggle'
import '../styles/main.scss'

smoothScroll.init({
  offset: 90,
  speed: 200,
})
dropdownToggleSetup()
