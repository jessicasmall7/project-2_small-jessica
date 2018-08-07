// Hamburger menu becomes visible in small viewports, and drop-down is visible on click.

$(function() {

  $('.menu-button').on('click', function(e) {
    $('.menu').toggleClass('menu--active');
  });

});
