//WHEN MOUSE CLICK HAPPENS
$("button").click(function () { 

  let charGetsClicked = this.innerHTML;

  makeSound(charGetsClicked);

  buttonAnimation(charGetsClicked);
});


//WHEN KEYBOARD PRESS HAPPENS
$(document).keypress(function (event) { 

  makeSound(event.key);

  buttonAnimation(event.key);
});


function makeSound(key){
  switch(key){
    case "w":
      new Audio ("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio ("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio ("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio ("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio ("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio ("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey){
  let activeButton = $("." + currentKey);
  activeButton.addClass("pressed");

  setTimeout(function() { 
    activeButton.removeClass("pressed");
   },100);
}

//   " "