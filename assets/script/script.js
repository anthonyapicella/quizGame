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
var quizContainer = document.getElementById("quiz-container");
var quizRules = document.getElementById("rules");
var timeleft = document.getElementById("timer");


var questionContainerEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answers")

// event listeners for howto and start buttons
howButton.addEventListener("click", howToPlay);
startButton.addEventListener("click", startQuiz);

var timeleft = 90;
var score =0;


// Displays game rules on click

function howToPlay(){
    howButton.classList.add("hide");
    quizRules.classList.remove("hide");
    startButton.classList.remove("hide")
}

// Starts quiz and timer on click

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


var myQuestions = [ {
    question: "'Snakes?! Why’d It Have To Be Snakes?'",
    answers: [
      {text: "Star Lord", correct: false},
      {text: "Jeff 'The Dude' Lebowski", correct: false},
      {text: "Indiana Jones", correct: true},
      {text: "Han Solo", correct: false}
    ],
  
  }, {
    question: "'With great power, comes great responsibilty.'",
      answers: [
        {text: "Ben Parker", correct: true},
        {text: "The Ancient One", correct: false},
        {text: "Alfred Pennyworth", correct: false},
        {text: "Yoda", correct: false}
      ],
  }, {
    question: "'Make it so'",
      answers: [
        {text: "Captain Picard", correct: true},
        {text: "Captain Hook", correct: false},
        {text: "Captain Crunch", correct: false},
        {text: "Captain Marvel", correct: false}
      ],
  }, {
    question: "Why, you stuck up, half-witted, scruffy-looking, Nerf-herder!",
      answers: [
        {text: "Princess Leia", correct: true},
        {text: "Princess Jasmine", correct: false},
        {text: "Princess Buttercup", correct: false},
        {text: "Princess Peach", correct: false}
      ],
  } 


];
