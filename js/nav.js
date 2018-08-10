// Hamburger menu becomes visible in small viewports, and drop-down is visible on click.

$(function() {

  $('.menu-button').on('click', function(e) {
    $('.menu').toggleClass('menu--active');
  });

});


// Login Popup jQuery Plugin

  $(document).ready(function() {

    // Initialize the plugin
    $('#my_popup').popup();

  });

  $('#fade').popup({
    transition: 'all 0.3s',
    scrolllock: true // optional
  });
