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


// declare variable for start button corresponding function
var startButton = document.getElementById("start-btn");
var quizContainer = document.getElementById("quizContainer");
var quizRules = document.getElementById("rules")

startButton.addEventListener('click', startQuiz)

console.log(quizRules)

function startQuiz() {
    startButton.classList.add("hide")
    quizRules.classList.add("hide")
    quizContainer.classList.remove("hide")
}

