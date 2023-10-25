//! GLOBAL DEĞİŞKENLER
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

const inputGuess = document.getElementById("number");
// console.log(inputGuess);

const checkBtn = document.querySelector("#checkBtn");
const secret = document.getElementsByClassName("secret")[0];

const starts = document.querySelector("#starts");
const again = document.getElementById("again");

let score = 10;
let topScore = localStorage.getItem("topScore") || 0;

//! local storage değişken oluşturma
// localStorage.setItem("topScore", topScore.innerText);

//? DOM'daki top-score degerini localStorage'den okuyarak guncelle.
document.querySelector("#span2").innerText = topScore;

//!  Event Handler oluşturma

checkBtn.addEventListener("click", () => {
  if (!inputGuess.value) {
    alert("Lütfen rakam giriniz:");
  }
  if (score > 0) {
    if (+inputGuess.value === randomNumber) {
      if (score > topScore) {
        localStorage.setItem("topScore", score);
        document.querySelector("#span2").innerText = score;
      }
      starts.innerText = "Congratulations- You found the number";
      document.querySelector("body").style.background = "green";
      checkBtn.style.background = "green";
      again.style.background = "green";
      secret.innerText = randomNumber;
      //   topScore = score;
    } else if (inputGuess.value > randomNumber) {
      starts.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-3x"></i> Decrease Your Guess!!! `;
      score--;
    } else if (inputGuess.value < randomNumber) {
      starts.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-3x"></i> Increase Your Guess!!! `;
      score--;
    }
  }
  if (score == 0) {
    starts.innerText = "unfortunately, You Lost";
    document.querySelector("body").style.background = "red";
    checkBtn.style.background = "red";
    again.style.background = "red";

    secret.innerText = randomNumber;
  }
  inputGuess.value = "";
});

//! again btn event ayarlama
again.addEventListener("click", () => {
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  score = 10;
  document.querySelector("body").style.background = "#2d3436";
  checkBtn.style.background = "#2d3436";
  again.style.background = "#2d3436";
  secret.innerText = "?";
  inputGuess.value = "";
  starts.innerText = "Starting...";
});

//! Sayfa Yüklenince number girdisine odaklanma

window.onload = () => {
  inputGuess.focus();
};

//! enter'a basınca check çalışssın

document.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    checkBtn.click();
  }
});

//! A'ya basınca again çalışssın
document.addEventListener("keydown", (event) => {
  if (event.keyCode == 65) {
    again.click();
  }
});

// console.log(score);
// // console.log(localStorage.getItem("topScoreLoc"));
// console.log(localStorage.getItem("topScore"));

// console.log(score.innerText);
// console.log(topScore.innerText);
// console.log(topScore > score);
// console.log(localStorage.getItem("topScore"));
