var changeColor = function() {
  if ($('h1').css("color") === 'rgb(0, 0, 255)') {
    $('h1').css("color", 'yellow');
  }
  else {
    $('h1').css("color", 'blue');
  }
}
