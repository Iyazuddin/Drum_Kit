// Select all drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Add click event to each button
drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const key = this.innerHTML.toLowerCase();
    playSound(key);
    buttonAnimation(key);
  });
});

// Add keyboard event
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  playSound(key);
  buttonAnimation(key);
});

// Play the appropriate sound
function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/crash.mp3").play();
      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("sounds/snare.mp3").play();
      break;

    default:
      // Ignore any other key
      return;
  }
}

// Animate the pressed button
function buttonAnimation(key) {
  const activeButton = document.querySelector("." + key);

  if (!activeButton) return;

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
