/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/


// declare variables for buttons and corresponding functions
var howButton = document.getElementById("how-btn");
var startButton = document.getElementById("start-btn");
var quizContainer = document.getElementById("quizContainer");
var quizRules = document.getElementById("rules");
var timeleft = document.getElementById("timer");

// event listeners for howto and start buttons
howButton.addEventListener("click", howToPlay);

startButton.addEventListener("click", startQuiz);

// countdown timer code

var timeleft = 90;


// functions for 

function howToPlay(){
    howButton.classList.add("hide");
    quizRules.classList.remove("hide");
    startButton.classList.remove("hide")
}

function startQuiz() {
    startButton.classList.add("hide");
    quizRules.classList.add("hide");
    quizContainer.classList.remove("hide");
    var quizTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(quizTimer);
          document.getElementById("timer").innerHTML = "GAME OVER";
        } else {
          document.getElementById("timer").innerHTML = timeleft;
        }
        timeleft -= 1;
      }, 1000);
}

