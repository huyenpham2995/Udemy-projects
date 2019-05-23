var audioList = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3",
  "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"
];

//target on all button. addEventListener wait for a certain action to be performed
//the listener is the function that is going to be executed when that action
//is performed. In this case when mouse is clicked, handleClick() will be called.
//The list of action can be found in the document
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    }

  );
}

//trigger the keyboard pressed to generate sound
//event shows which action was triggered. Can be printed to see
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    default:
    console.log(butonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  //add the pressed class to the current key to create animation
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
