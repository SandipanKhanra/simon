var buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  // console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  // Jquery to select id $("#idName")
  $("#" + randomChosenColour).fadeOut().fadeIn();
  var audio = new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();
}
