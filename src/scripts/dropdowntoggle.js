var $ = require('jquery')

var dropdownToggleSetup = function() {
  $(document).ready(function() {
    $('#nav-bar').find('li').click(function() {
      console.log('helo')
      $('#nav-bar').removeClass('in')
    });
  });
};
module.exports = dropdownToggleSetup
