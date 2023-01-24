let startScreen = document.querySelector("#start-screen");
let questions = document.querySelector("#questions");
let startButton = document.querySelector("#start");
let time = document.querySelector("#time");
let timeCount = 60;
let timer
let score = 0;
let currentQuestionIndex = 0;
// Select the element to append the buttons
let choicesElement = document.getElementById("choices");


// Function start button that when clicked a timer starts and the first question appears.

function quizStart() {
    startScreen.setAttribute("class", "hide");
    questions.removeAttribute("class");
    timer = setInterval(() => {
        time.textContent = timeCount;
        timeCount--;
        if (timeCount <= 0) {
          endQuiz();
        }
    }, 1000);
    retrieveQuestion()
}
startButton.addEventListener("click", quizStart);

function retrieveQuestion() {
    let questionTitle = document.getElementById("question-title");
    let currentQuestion = questionsQuiz[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.title;
    //next code to clear out old choices
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i){   
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = choice;
    choiceButton.onclick = checkAnswer;
    choicesElement.appendChild(choiceButton);    
  })
}

function checkAnswer() {
  if (this.value === questionsQuiz[currentQuestionIndex].answer) {
    score++;
  }
  // Check if the answer is wrong
  if (this.value !== questionsQuiz[currentQuestionIndex].answer) {
    timeCount -= 15;
    if (timeCount < 0) {
      //make sure time count doesn't go under zero
      timeCount = 0;
    }
    // Update timer appropriately 
    time.textContent = timeCount;
  }
  // Move to the next question
  currentQuestionIndex++;

  // check if we are out of questions
  if (currentQuestionIndex === questionsQuiz.length) {
    //If out of questions run game over functions
    endQuiz();
  } else {
    retrieveQuestion();
  }
}

function endQuiz() {
  //clear interval
  clearInterval(timer);
  //show end screen
  let endScreen = document.getElementById("end-screen");
  endScreen.removeAttribute("class");
  //show score 
  let finalScore = document.getElementById("final-score");
  finalScore.textContent = score;
  //hide questions
  questions.setAttribute("class", "hide");
  //create input for initials
  let initialsInput = document.getElementById("initials");
  //create save button
  let saveButton = document.getElementById("submit");
  saveButton.onclick = saveScore;
}

function saveScore() {
  let initials = document.getElementById("initials").value;
  let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  let newScore = {initials, score};
  highScores.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(highScores));
  //redirect to highscores page
  window.location.href = "highscores.html";
  }