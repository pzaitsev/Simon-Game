var gamePattern = [];
var userClickedPattern = [];
var level=0;

var buttonColors = ["red", "blue", "green", "yellow"];

var isRunning = false;

if (isRunning == false)
    $(document).keypress( function(){
        isRunning = true;
        nextSequence();
});

function nextSequence(){
    randomNumber = Math.floor( Math.random()*4 );
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);
}


$(".btn").click( function(event){
    userChosenColor = event.currentTarget.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
    
});

function playSound(name){
    var audio = new Audio("./sounds/"+name+'.mp3');
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    }, 100);

}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){

        if (userClickedPattern.length == gamePattern.length){
            userClickedPattern = [];
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }

    else{
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        $(document.body).addClass("game-over");
        setTimeout(function(){
            $(document.body).removeClass("game-over")
            }, 200);
        reset();}

}

function reset(){
    gamePattern = [];
    userClickedPattern = []
    level = 0;
    isRunning = false;
}