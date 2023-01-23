let startScreen = document.querySelector("#start-Screen");
let questions = document.querySelector("#questions");
let startButton = document.querySelector("#start");
let time = document.querySelector("#time");
let timeCount = 60;
let timer

function quizStart() {
    startScreen.setAttribute("class", "hide");
    questions.removeAttribute("class");
    timer = setInterval(() => {
        time.textContent = timeCount;
        timeCount--;
    }, 1000);
    retrieveQuestion()
}
startButton.addEventListener("click", quizStart);

function retrieveQuestion(){
    let questionTitle = document.querySelector("question-title")
}