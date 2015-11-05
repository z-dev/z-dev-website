const $ = require('jquery')

const dropdownToggleSetup = () => {
  $(document).ready(() => {
    $('#nav-bar').find('li').click(() => {
      $('#nav-bar').removeClass('in')
    })
  })
}

module.exports = dropdownToggleSetup
