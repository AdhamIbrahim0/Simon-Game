var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var playerPattern = [];
var level = 0;
var gameStarted = false;


//Start Game
$(document).keydown(startGame);

$("body").click(startGame);


//Player Click
$(".btn").click(function() {
  playerPattern.push(this.id);
  buttonPress(this.id);
  if(playerPattern[playerPattern.length - 1] == gamePattern[playerPattern.length - 1]) {
    if(playerPattern.length == gamePattern.length) {
      setTimeout(nextButton, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");}, 200);
    new Audio("sounds/wrong.mp3").play();
    $("#level-title").text("Game Over, Press Any Key to Restart");
    gameStarted = false;
    gamePattern = [];
    level = 0;
    playerPattern = [];
  }
});


function nextButton() {
  var randomNumber = Math.round(Math.random() * 3);
  var button = buttonColors[randomNumber];
  buttonPress(button);

  playerPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  gamePattern.push(button);
  console.log(gamePattern);
}

function buttonPress(button) {
  //Animation
  $("#" + button).addClass("pressed");
  let timer = setTimeout(function() {
    $("#" + button).removeClass("pressed");
  }, 100);

  //Sound
  var sound = new Audio(`sounds/${button}.mp3`);
  sound.play();
}

function startGame() {
  if (!gameStarted) {
    let timer = setTimeout(nextButton, 500);
    gameStarted = true;
  }
}
