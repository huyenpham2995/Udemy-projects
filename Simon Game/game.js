buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
var started = false;
var level = 0;

//generate the sound according to the button
function playSound(name) {
  var audio = new Audio(name);
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(3 * Math.random());
  var randomChosenColour = buttonColours[randomNumber];
  level = level + 1;
  $("#level-title").text("Level " + level);
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  animatePress(randomChosenColour);
  playSound("sounds/" + randomChosenColour + ".mp3");
}

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound("sounds/" + userChosenColour + ".mp3");

  checkAnswer(userClickedPattern.length - 1);
});

///Game start
$(document).keypress(function() {
  if (started === false) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//check the right answer
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() to generate next pattern
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  //if the answer is wrong
  else {
    //display game over screen
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    //play game over sound
    playSound("sounds/wrong.mp3");
    startOver();
  }
}

//start over the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
