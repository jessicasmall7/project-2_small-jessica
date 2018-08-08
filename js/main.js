//Remove blue outline when selected from form input
$(document).ready(function(){
  var $outline = $('input');
    $outline.css({"outline": "none"});
});

//Remove blue outline when selected from form message
$(document).ready(function(){
  var $outline = $('textarea');
    $outline.css({"outline": "none"});
});

//Remove blue outline when selected from form select box
$(document).ready(function(){
  var $outline = $('select');
    $outline.css({"outline": "none"});
});
