var buttonStartQuiz = document.getElementById('start-quiz');
var timerCountdown = document.getElementById("time");

function clockTick() {
    time--;
    timerCountdown.textContent = time;
}

function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    //questionsEl.removeAttribute("class");
    timerCountdown = setInterval(clockTick, 1000);
    timerCountdown.textContent = time;
    //getQuestion();
}

buttonStartQuiz.onclick = startQuiz;


  // Questions
var questions = [
    {
        title: "Commonly used data types don't include:",
        choices: [
            "strings", 
            "booleans", 
            "alerts", 
            "numbers"
                ],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statment is enclosed with _____.",
        choices: [
            "quotes", 
            "curly brackets", 
            "parenthesis", 
            "square brackets"
                ],
        answer: "parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store _______.",
        choices: [
            "numbers and strings", 
            "other arrays", 
            "booleans", 
            "all of the above"
                ],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: [
            "commas", 
            "curly brackets", 
            "quotes", 
            "parenthesis"
                ],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "JavaScript", 
            "terminal/bash", 
            "for loops", 
            "console.log"
                ],
        answer: "console.log"
    },
]



// All done!
// Your final score is 22.
// Enter initials: {    } [Submit]

// High Scores
// 1. AB - 22
// [Go Back] [Clear High Scores]
