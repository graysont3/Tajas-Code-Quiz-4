var btn = document.querySelector("#btn");
var paragraph = document.querySelector(".paragraph");
var time = document.querySelector(".time");
var questionEL = document.querySelector(".questions");
var timer = 75;

var questions = [
    {
        question: "Commonly used data types Do Not include?",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question: "The condition in an if / else statment is enclosed with _______.?",
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'parennthesis'
    },
    {
        question: "Arrays in JavaScript can be used to store _______.?",
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    },
]

btn.addEventListener('click', () => {
    // console.log("Hello World!");
    paragraph.classList.add("hide");
    var startTime = setInterval(() => {
        timer--
        time.textContent = "Time: "+timer;
        console.log(timer)
        if (timer <= 0) {
            clearInterval(startTime);
        }
    }, 1000)

    for (let i = 0; i < questions[0].choices.length; i++) {
        var choicesbtn = document.createElement("button");
        choicesbtn.setAttribute("class", "choice-btn")
        choicesbtn.innerHTML = questions[0].choices[i]
        questionEL.appendChild(choicesbtn)
        console.log(choicesbtn)
    }
});



// event.target


// var y = document.createElement('h1')
// y.textContent = 'What is your name?' 
// questionEL.appendChild(y)



