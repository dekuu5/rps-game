const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comb-score");
const scoreBored_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sicssors_div = document.getElementById("s");
function getCompChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let result = ["rock", "paper", "sicssors"];
  return result[randomNum];
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });
  paper_div.addEventListener("click", function() {
    game("paper");
  });
  sicssors_div.addEventListener("click", function() {
    game("sicssors");
  });
}
