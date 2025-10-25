function randomNumberGenerator() {
  return Math.trunc(Math.random() * 20 + 1);
}

let randomNumber = randomNumberGenerator();
const checkBtn = document.querySelector(".check-btn");
let input = document.querySelector(".input").value;
let highestScore = (document.querySelector(".highest").innerHTML = 0);
let score = 10;
document.querySelector(".your").innerHTML = score;
const restartBtn = document.querySelector(".restart");
const inputClick = document.querySelector(".input");

inputClick.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkBtn.click();
  }
});

restartBtn.addEventListener("keypress", function (event) {
  if (event.key === "r" || "R") {
    event.preventDefault();
    restartBtn.click();
  }
});

checkBtn.addEventListener("click", function () {
  const input = Number(document.querySelector(".input").value);
  if (!Boolean(input)) {
    let label = (document.querySelector(".label").innerHTML =
      "any nubmer entered 😠");
    console.log(input);
  } else if (input == randomNumber) {
    let questionText = (document.querySelector(".question").innerHTML =
      randomNumber);
    let label = (document.querySelector(".label").innerHTML =
      "Congratulations, you found!🎉");
    document.querySelector("body").style.background = "#1344a7";
    score > highestScore
      ? (highestScore = score)
      : (highestScore = highestScore);
    document.querySelector(".highest").innerHTML = highestScore;
    // console.log(input);
  } else if (score <= 1) {
    let questionText = (document.querySelector(".question").innerHTML =
      randomNumber);
    let label = (document.querySelector(".label").innerHTML = "you loose😢");
    score = 0;
    document.querySelector(".your").innerHTML = score;
    document.querySelector("body").style.background = "red";
    document.querySelector(".title").innerHTML = "game over";
  } else if (input < randomNumber) {
    let label = (document.querySelector(".label").innerHTML =
      "Smaller than needed 🤏");
    score--;
    document.querySelector(".your").innerHTML = score;
    // console.log(input);
  } else {
    let label = (document.querySelector(".label").innerHTML =
      "Bigger than needed 🙌");
    score--;
    document.querySelector(".your").innerHTML = score;
    // console.log(input);
  }
});

restartBtn.addEventListener("click", function () {
  let questionText = (document.querySelector(".question").innerHTML = "???");
  randomNumber = randomNumberGenerator();
  score = 10;
  document.querySelector(".your").innerHTML = score;
  document.querySelector("body").style.background = "#1F2125";
  let label = (document.querySelector(".label").innerHTML =
    "ENTER YOUR PREDICTION");
  input = "";
  document.querySelector(".input").value = input;
  document.querySelector(".title").innerHTML = "game";
});
