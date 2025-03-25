var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber = nextSequence();
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

function nextSequence(){
    return Math.floor( Math.random()*4 );;
}

$("#"+randomChosenColor).fadeOut(100).fadeIn(100);

var audio = new Audio("./sounds/"+randomChosenColor+'.mp3');
audio.play();

$("")