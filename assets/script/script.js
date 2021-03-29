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
var gameOverCard = document.getElementById("gameOver");
var winner = document.getElementById("you-win");
var timeleft = document.getElementById("timer");
var playerInit;
var playerScore;

var questionContainerEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answers");
var btn1 = document.getElementById("answer-btn0")
var btn2 = document.getElementById("answer-btn1")
var btn3 = document.getElementById("answer-btn2")
var btn4 = document.getElementById("answer-btn3")

var highScoreArr = []

var currentQuestionIndex;

// event listeners for howto and start buttons
howButton.addEventListener("click", howToPlay);
startButton.addEventListener("click", startQuiz);

var timeleft = 90;
var score = 0;
let j = 0

// Question array

var myQuestions = [
    {
        question: "'Snakes?! Why’d It Have To Be Snakes?'",
        answers: [
            { text: "Star Lord", correct: false },
            { text: "Jeffrey 'The Dude' Lebowski", correct: false },
            { text: "Indiana Jones", correct: true },
            { text: "Han Solo", correct: false },
        ],
    },
    {
        question: "'With great power, comes great responsibility.'",
        answers: [
            { text: "Ben Parker", correct: true },
            { text: "The Ancient One", correct: false },
            { text: "Alfred Pennyworth", correct: false },
            { text: "Yoda", correct: false },
        ],
    },
    {
        question: "'Make it so'",
        answers: [
            { text: "Captain Picard", correct: true },
            { text: "Captain Hook", correct: false },
            { text: "Captain Crunch", correct: false },
            { text: "Captain Marvel", correct: false },
        ],
    },
    {
        question:
            "Why, you stuck up, half-witted, scruffy-looking, Nerf-herder!",
        answers: [
            { text: "Princess Leia", correct: true },
            { text: "Princess Jasmine", correct: false },
            { text: "Princess Buttercup", correct: false },
            { text: "Princess Peach", correct: false },
        ],
    },
    {
        question: "'On your left.'",
        answers: [
            { text: "Robin", correct: false },
            { text: "Hawkgirl", correct: false },
            { text: "The Falcon", correct: true },
            { text: "Dove", correct: false },
        ],
    },
    {
        question: "'You shall not pass!'",
        answers: [
            { text: "Oz, the Great and Powerful", correct: false },
            { text: "Gandalf the White", correct: false },
            { text: "Albus Dumbledore", correct: false },
            { text: "Gandalf the Grey", correct: true },
        ],
    },
    {
        question: "'Come with me if you want to live.'",
        answers: [
            { text: "The Terminator, model: T-800", correct: true },
            { text: "RoboCop", correct: false },
            { text: "The Iron Giant", correct: false },
            { text: "Optimus Prime", correct: false },
        ],
    },
    {
        question: "'Life, finds a way.'",
        answers: [
            { text: "Dr. Doolittle", correct: false },
            { text: "Dr. Ian Malcolm", correct: true },
            { text: "Dr. Frankenstein", correct: false },
            { text: "Dr Hannibal Lector", correct: false },
        ],
    },
    {
        question: "'Dodge this.'",
        answers: [
            { text: "Patches O'Houlihan", correct: false },
            { text: "Jerry Maguire", correct: false },
            { text: "Trinity", correct: true },
            { text: "Deadpool", correct: false },
        ],
    },
    {
        question: "'I love you 3000'",
        answers: [
            { text: "Morgan Freeman", correct: false },
            { text: "Morgan Stark", correct: true },
            { text: "Morgan le Fay", correct: false },
            { text: "Morgan Jones", correct: false },
        ],
    },
    {
        question: "'You ever dance with the Devil in the pale moonlight?'",
        answers: [
            { text: "The Penguin", correct: false },
            { text: "The Joker", correct: true },
            { text: "Mr. Freeze", correct: false },
            { text: "The Scarecrow", correct: false },
        ],
    },

];

// Displays game rules on click

function howToPlay() {
    howButton.classList.add("hide");
    quizRules.classList.remove("hide");
    startButton.classList.remove("hide");
}

// Starts quiz and timer on click

function startQuiz() {
    startButton.classList.add("hide");
    quizRules.classList.add("hide");
    quizContainer.classList.remove("hide");

    document.getElementById("question").innerHTML = myQuestions[j].question;

    for (let i = 0; i < myQuestions[j].answers.length; i++) {
        //    console.log(myQuestions[0].answers[i].text);
        document.getElementById("answer-btn" + i).innerHTML =
            myQuestions[j].answers[i].text;
        document
            .getElementById("answer-btn" + i)
            .setAttribute("data-correct", myQuestions[0].answers[i].correct);
    }
    j++
    
    var quizTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(quizTimer);
            document.getElementById("timer").innerHTML = "GAME OVER";
            gameOver()
        } else {
            document.getElementById("timer").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
    
    console.log();
};

function selectAnswer(button) {
   
    if(button.getAttribute("data-correct") == "true") {
        score = score += timeleft
        console.log(score);
        document.querySelector("#score").innerHTML = score;
    }else{
        timeleft = timeleft -= 20
    }

   

    document.getElementById("question").innerHTML = myQuestions[j].question;

    for (let i = 0; i < myQuestions[j].answers.length; i++) {
        document.getElementById("answer-btn" + i).innerHTML =
            myQuestions[j].answers[i].text;
        document
            .getElementById("answer-btn" + i)
            .setAttribute("data-correct", myQuestions[j].answers[i].correct);
    }

    j++

    if(j > 10) {
        youWin()
        
    }
    console.log(j);
}

function gameOver(){
    quizContainer.classList.add("hide");
    gameOverCard.classList.remove("hide");
};

function showHighScores() {
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    var highScoreList = document.getElementById('highScores');
  
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.name}`)
      .join('');
}

function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
    if (score > lowestScore) {
      const name = prompt('You got a highscore! Enter name:');
      const newScore = { score, name };
      saveHighScore(newScore, highScores);
      showHighScores();
    }
}

function saveHighScore(score, highScores) {
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(NO_OF_HIGH_SCORES);
  
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function youWin(){
    quizContainer.classList.add("hide");
    winner.classList.remove("hide");
}



btn1.addEventListener("click", () => {
    selectAnswer(btn1)
})
btn2.addEventListener("click", () => {
    selectAnswer(btn2)
})
btn3.addEventListener("click", () => {
    selectAnswer(btn3)
})
btn4.addEventListener("click", () => {
    selectAnswer(btn4)
})