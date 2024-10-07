//  CREATING RANDOM VARIABLE FOR THE PLAYER 1;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//  REPLACE THE NUMBER 6 IN THE DICE IMG LOCATION WITH THE RANDOM NUMBER;
var randomDiceImage1 = "./images/dice6.png";
randomDiceImage1 = randomDiceImage1.replace("6", randomNumber1);

document.querySelector("img.img1").setAttribute("src", randomDiceImage1);



//  CREATING RANDOM VARIABLE FOR THE PLAYER 2;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//  REPLACE THE NUMBER 6 IN THE DICE IMG LOCATION WITH THE RANDOM NUMBER;
var randomDiceImage2 = "./images/dice6.png";
randomDiceImage2 = randomDiceImage2.replace("6", randomNumber2);

document.querySelector("img.img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").textContent = "It's a Draw!";
}