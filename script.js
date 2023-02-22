var btn = document.querySelector("#btn");
var paragraph = document.querySelector(".paragraph");
var time = document.querySelector(".time");
var questionEL = document.querySelector(".questions");
var timer = 75;

var questions = [
    {
        question: "What is HTML?",
        choices: ['hyper run language', 'hyper text language', 'all of the above', 'none of the above'],
        answer: 'hyper text language'
    },
    {
        question: "What is JavaScript?",
        choices: ['Programming Language', 'Mark down language', 'all of the above', 'none of the above'],
        answer: 'hyper text language'
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



