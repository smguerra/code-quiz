let highScoresList = document.getElementById("highscores");
let clearButton = document.getElementById("clear");

function displayHighScores() {
  let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  highScores.sort((a, b) => b.score - a.score);
  highScores.forEach((score, i) => {
    let li = document.createElement("li");
    li.textContent = `${i + 1}. ${score.initials} - ${score.score}`;
    highScoresList.appendChild(li);
  });
}

clearButton.onclick = function () {
  localStorage.removeItem("highscores");
  highScoresList.innerHTML = "";
};

displayHighScores();