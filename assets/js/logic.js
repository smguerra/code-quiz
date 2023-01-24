let startScreen = document.querySelector("#start-screen");
let questions = document.querySelector("#questions");
let startButton = document.querySelector("#start");
let time = document.querySelector("#time");
let timeCount = 60;
let timer
let score = 0;

// Function start button that when clicked a timer starts and the first question appears.

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

function retrieveQuestion() {
    let questionTitle = document.getElementById("question-title");
    questionTitle.textContent = questionsQuiz[0].title;
}

// Select the element to append the buttons
let choicesElement = document.getElementById("choices");

function displayChoices(question) {

  // Iterate through the choices of the current question
  for (var i = 0; i < question.choices.length; i++) {
    // Get the current choice
    let choice = question.choices[i];

    // Create a button element
    let button = document.createElement("button");

    // Set the text content of the button
    button.textContent = choice;

    // Append the button to the choices element
    choicesElement.appendChild(button);
  }
}

// Index to keep track of the current question
let currentQuestionIndex = 1;

// Display the choices for the first question
displayChoices(questionsQuiz[currentQuestionIndex]);

