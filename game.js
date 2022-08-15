var isStarted = false;
var level = 0;
var buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  userClickedPattern=[]

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  // Jquery to select id $("#idName")
  $("#" + randomChosenColour).fadeOut().fadeIn();
  playSound(randomChosenColour);

  //Increase the level by 1 every time nextSequence() is called.
  level++;

  //Update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);
}

// Use jQuery to trigger a call back function when a button is clicked and store the id
$(".btn").click(function() {

  //When ever an event occurs browser will create by deafult event object which we can access inside the callback function
  // so we have to name this object inside the parameter list of funcion like "event" or "e"
  // var userChosenColour = event.target.id;

  // We can also use "this" keyword to refer to the current object
  // var userChosenColour = this.id;
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  //Play sound correspomding to the colour
  playSound(userChosenColour);

  animatePress(userChosenColour);

  //Check if the most recent button clicked is correct or not
  checkAnswer(userClickedPattern.length - 1);
})


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  // Add the css class "pressed" to the current button
  $("#" + currentColour).addClass("pressed");

  // After 100 miliseconds remove the "pressed" class
  setInterval(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100);
}

// Start the game
$(document).on("keypress", function() {
  if (!isStarted) {
    nextSequence();
    isStarted = true;
  }
})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // console.log("Success");
    // console.log(gamePattern);
    // console.log(userClickedPattern);

    //When user has finished the sequence then call next sequence after 100 ms
    if(gamePattern.length===userClickedPattern.length){
      setInterval(nextSequence(),100);
    }
  } else {
    // console.log("Wrong");
    // Reset the h1 text,level
    $("#level-title").text("Press A Key to Start");
    level=0;
    isStarted = false;
  }
}
