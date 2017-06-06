import { createSelector } from 'reselect-change-memoize'
import _ from 'lodash'

export default createSelector(
  'header',
  state => state.Header,
  headerState => {
    return { ...headerState}
  }
)
