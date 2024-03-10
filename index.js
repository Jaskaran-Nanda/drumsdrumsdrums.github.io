for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  keyPress(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", (Event) => {
  keyPress(Event.key);
  buttonAnimation(Event.key);
});

function keyPress(keyy) {
  switch (keyy) {
    case "w":
      var soundTom1 = new Audio("./sounds/tom-1.mp3");
      soundTom1.play();
      break;
    case "a":
      var soundTom2 = new Audio("./sounds/tom-2.mp3");
      soundTom2.play();
      break;
    case "s":
      var soundTom3 = new Audio("./sounds/tom-3.mp3");
      soundTom3.play();
      break;
    case "d":
      var soundTom4 = new Audio("./sounds/tom-4.mp3");
      soundTom4.play();
      break;

    case "j":
      var soundSnare = new Audio("./sounds/snare.mp3");
      soundSnare.play();
      break;
    case "k":
      var soundCrash = new Audio("./sounds/crash.mp3");
      soundCrash.play();
      break;
    case "l":
      var soundKick = new Audio("./sounds/kick-bass.mp3");
      soundKick.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
