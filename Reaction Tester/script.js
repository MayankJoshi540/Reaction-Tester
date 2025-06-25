const box = document.getElementById("box");
const message = document.getElementById("message");
const reactionTimeDisplay = document.getElementById("reaction-time");

let startTime;

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function showBox() {
  let delayTime = Math.random() * 3000 + 1000;

  setTimeout(() => {
    let randomTop = Math.random() * (window.innerHeight - 100);
    let randomLeft = Math.random() * (window.innerWidth - 100);

    box.style.top = `${randomTop}px`;
    box.style.left = `${randomLeft}px`;
    box.style.backgroundColor = getRandomColor();
    box.style.display = "block";

    startTime = Date.now();
    message.textContent = "Click the box!";
  }, delayTime);
}

box.addEventListener("click", () => {
  let reactionTime = (Date.now() - startTime) / 1000;

  box.style.display = "none";
  reactionTimeDisplay.textContent = `Your Reaction Time: ${reactionTime.toFixed(3)} seconds`;
  if(reactionTime <= 0.500){
    message.textContent = "Well done!";
  }
  else if(reactionTime > 0.500 && reactionTime <= 1.000){
    message.textContent = "Click More Fast!!";
  }
  else{
    message.textContent = "Its Comingg too Slow!!!";

  }

  showBox();
});

showBox();
