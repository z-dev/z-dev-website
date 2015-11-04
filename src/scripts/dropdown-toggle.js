var $ = require('jquery')

var dropdownToggleSetup = $(document).ready(function() {
    $('.drop-down').click(function() {
      console.log('helo')
      $('#nav-bar').removeClass('in')
    });
});
module.exports = dropdownToggleSetup
