import withRedux from 'next-redux-wrapper'
import createStore from 'redux/store'

export default mapStateToProps => Component => withRedux(createStore, mapStateToProps)(Component)
