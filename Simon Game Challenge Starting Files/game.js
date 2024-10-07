let gamePattern = [];
let buttonColors = ["red","blue","green","yellow"];
let randomChosenColor = buttonColors[randomNumber]; 
gamePattern.append(randomChosenColor);

function nextSequence(){
  let randomNumber = Math.floor(Math.random() * 3)+1;
}
nextSequence();

$("." + buttonColors).click(function () { 
  $("." + buttonColors).flash()
  
});

//     ""