const cards = document.querySelectorAll('.memory-card');
let pairsClicked = document.querySelector('#pairsClicked');
let matchedCard = document.getElementById('#matchedCard');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
function startGame(){
  document.getElementById("toggle").style.display = "none";
  document.getElementById("score").style.display = "flex";
  document.getElementById("arrow").style.display = "flex";
  document.getElementById("arrow").setAttribute("href", "/frozen");
}
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.character === secondCard.dataset.character;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  document.getElementById("matchedCard").setAttribute("src", "img/" + firstCard.dataset.character + ".jpeg");
  firstCard.classList.add("hidden");
  secondCard.classList.add("hidden");
  pointScored();
  resetBoard();
}
function pointScored() {
  score = score + 1;
  pairsClicked.innerHTML = score;
}
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

if (score === 8){
  console.log('done');
}
// for (file in files){  
//   console.log(file);
// }
cards.forEach(card => card.addEventListener('click', flipCard));

function small(){
  const myNodelist = document.getElementsByClassName("memory-card");
  for (let i = 0; i < 14; i++) {
    myNodelist[i].style.display = "flex";
    myNodelist[i].style.width = "13%";
    myNodelist[i].style.height = "60%";

  }
  
}
function medium(){
const myNodelist = document.getElementsByClassName("memory-card");
for (let i = 0; i < 20; i++) {
  myNodelist[i].style.display = "flex";
  myNodelist[i].style.width = "13.8%";
  myNodelist[i].style.height = "41%";
}
  document.getElementById("memory-game").setAttribute("style","margin-left: 10%;");

}
function large(){
const myNodelist = document.getElementsByClassName("memory-card");
//for nodelist length
for (let i = 0; i < 32; i++) {
  myNodelist[i].style.display = "flex";
  myNodelist[i].style.width = "11.6%";
  myNodelist[i].style.height = "35%";
  document.getElementById("memory-game").style.display = "flex";
}
}





