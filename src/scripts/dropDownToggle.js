import $ from 'jquery'

export default () => {
  $(document).ready(() => {
    $('#nav-bar').find('li').click(() => {
      $('#nav-bar').removeClass('in')
    })
  })
}
