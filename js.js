const inputs = document.querySelectorAll(".input");
const current = document.querySelector(".current");
const playAgain = document.querySelector(".play-again");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box7 = document.querySelector(".box-7");
const box8 = document.querySelector(".box-8");
const box9 = document.querySelector(".box-9");

// displaying input
let symbol = "x";
function valueInput() {
  if (this.textContent != "") return;
  if (symbol == "x") {
    this.textContent = symbol;
    this.style.fontSize = "5rem";
    this.style.paddingTop = "0px";
    this.disabled = true;
    current.textContent = `Player 0 turn`;
    symbol = "0";
  } else {
    this.textContent = symbol;
    this.disabled = true;
    this.style.fontSize = "4rem";
    this.style.paddingTop = "15px";
    current.textContent = `Player X turn`;
    symbol = "x";
  }
  checkWinner();
  draw();
}

// adding click event for display values
inputs.forEach((input) => {
  input.addEventListener("click", valueInput);
});

// for deciding winner
let winner = false;
function checkWinner() {
  if (
    (box1.textContent == "x" &&
      box2.textContent == "x" &&
      box3.textContent == "x") ||
    (box4.textContent == "x" &&
      box5.textContent == "x" &&
      box6.textContent == "x") ||
    (box7.textContent == "x" &&
      box8.textContent == "x" &&
      box9.textContent == "x") ||
    (box1.textContent == "x" &&
      box4.textContent == "x" &&
      box7.textContent == "x") ||
    (box2.textContent == "x" &&
      box5.textContent == "x" &&
      box8.textContent == "x") ||
    (box3.textContent == "x" &&
      box5.textContent == "x" &&
      box9.textContent == "x") ||
    (box1.textContent == "x" &&
      box5.textContent == "x" &&
      box9.textContent == "x") ||
    (box3.textContent == "x" &&
      box5.textContent == "x" &&
      box7.textContent == "x")
  ) {
    inputs.forEach((input) => {
      input.removeEventListener("click", valueInput);
    });
    alert("Player X Wins");
    current.textContent = "Player X Wins";
    winner = true;
  } else if (
    (box1.textContent == "0" &&
      box2.textContent == "0" &&
      box3.textContent == "0") ||
    (box4.textContent == "0" &&
      box5.textContent == "0" &&
      box6.textContent == "0") ||
    (box7.textContent == "0" &&
      box8.textContent == "0" &&
      box9.textContent == "0") ||
    (box1.textContent == "0" &&
      box4.textContent == "0" &&
      box7.textContent == "0") ||
    (box2.textContent == "0" &&
      box5.textContent == "0" &&
      box8.textContent == "0") ||
    (box3.textContent == "0" &&
      box5.textContent == "0" &&
      box9.textContent == "0") ||
    (box1.textContent == "0" &&
      box5.textContent == "0" &&
      box9.textContent == "0") ||
    (box3.textContent == "0" &&
      box5.textContent == "0" &&
      box7.textContent == "0")
  ) {
    inputs.forEach((input) => {
      input.removeEventListener("click", valueInput);
    });
    alert("Player 0 Wins");
    current.textContent = "Player 0 Wins";
    winner = true;
  }
}

// on draw
function draw() {
  if (
    box1.textContent != "" &&
    box2.textContent != "" &&
    box3.textContent != "" &&
    box4.textContent != "" &&
    box5.textContent != "" &&
    box6.textContent != "" &&
    box7.textContent != "" &&
    box8.textContent != "" &&
    box9.textContent != "" &&
    winner == false
  ) {
    alert("Match is Draw");
    current.textContent = `Match is Draw`;
  }
}

// for clear display
function clearDisplay() {
  inputs.forEach((input) => {
    input.textContent = "";
    input.addEventListener("click", valueInput);
  });
  current.textContent = `Player X turn`;
  symbol = "x";
  winner = false;
}

playAgain.addEventListener("click", clearDisplay);
