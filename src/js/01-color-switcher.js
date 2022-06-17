const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
//console.log(startBtn);
//console.log(stopBtn);


startBtn.addEventListener("click", (evt) => {
  timerId = setInterval(() => {
    bodyEl.style.background = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
    });

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
