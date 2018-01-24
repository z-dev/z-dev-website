import { isBrowser } from '~/common/isServer'
import config from '~/config'

/* eslint-disable import/no-mutable-exports, global-require */
let mixpanel

if (isBrowser()) {
  mixpanel = require('mixpanel-browser')
  mixpanel.init(config.mixPanelToken)
}

export const trackPageView = () => {
  if (isBrowser()) {
    mixpanel.track('page viewed', {
      'page name': document.title,
      url: window.location.pathname,
    })
  }
}

export default mixpanel
