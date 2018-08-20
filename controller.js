$(document).ready(function() {

  // Clicks and establish variables
  var padOne = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3');
  $('.pad1').mousedown(function() {
    padOne.load();
    padOne.play();
  });

  var padTwo = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3');
  $('.pad2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3');
  $('.pad3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3');
  $('.pad4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3');
  $('.pad5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

  var padSix = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3');
  $('.pad6').mousedown(function() {
    padSix.load();
    padSix.play();
  });

  var padSeven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3');
  $('.pad7').mousedown(function() {
    padSeven.load();
    padSeven.play();
  });

  var padEight = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3');
  $('.pad8').mousedown(function() {
    padEight.load();
    padEight.play();
  });

  var padNine = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3');
  $('.pad9').mousedown(function() {
    padNine.load();
    padNine.play();
  });

  var padTen = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3');
  $('.pad10').mousedown(function() {
    padTen.load();
    padTen.play();
  });

  var padEleven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3');
  $('.pad11').mousedown(function() {
    padEleven.load();
    padEleven.play();
  });

  var padTwelve = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3');
  $('.pad12').mousedown(function() {
    padTwelve.load();
    padTwelve.play();
  });

  // Keypress add active class
  $(window).keydown(function(e) {
    var pad = e.keyCode;
    var key = String.fromCharCode(pad);
    $("div[data-pad='" + pad + "']").addClass("active");

    switch(key) {
      case "Q":
        padOne.load();
        padOne.play();
        break;
      case "W":
        padTwo.load();
        padTwo.play();
        break;
      case "E":
        padThree.load();
        padThree.play();
        break;
      case "R":
        padFour.load();
        padFour.play();
        break;
      case "A":
        padFive.load();
        padFive.play();
        break;
      case "S":
        padSix.load();
        padSix.play();
        break;
      case "D":
        padSeven.load();
        padSeven.play();
        break;
      case "F":
        padEight.load();
        padEight.play();
        break;
      case "Z":
        padNine.load();
        padNine.play();
        break;
      case "X":
        padTen.load();
        padTen.play();
        break;
      case "C":
        padEleven.load();
        padEleven.play();
        break;
      case "V":
        padTwelve.load();
        padTwelve.play();
        break;
    }
  });

  // Remove class on release of key
  $(window).keyup(function(e) {
    var pad = e.keyCode;
    $("div[data-pad='" + pad + "']").removeClass("active");
  });

});
