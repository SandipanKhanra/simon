var buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  // console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  // Jquery to select id $("#idName")
  $("#" + randomChosenColour).fadeOut().fadeIn();
  playSound(randomChosenColour);
}

// Use jQuery to trigger a call back function when a button is clicked and store the id
$(".btn").click(function() {
  // console.log(event);
  //When ever an event occurs browser will create by deafult event object which we can access inside the callback function
  // so we have to name this object inside the parameter list of funcion like "event" or "e"
  // var userChosenColour = event.target.id;

  // We can also use "this" keyword to refer to the current object
  // var userChosenColour = this.id;
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);

  //Play sound correspomding to the colour
  playSound(userChosenColour);

  animatePress(userChosenColour);
})


function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  // Add the css class "pressed" to the current button
  $("#"+currentColour).addClass("pressed");

// After 100 miliseconds remove the "pressed" class
  setInterval(function(){
    $("#"+currentColour).removeClass("pressed")
  },100);
}
