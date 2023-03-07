let timer = 0;
let timerInterval;

let ms = document.getElementById("mill-sec");
let sec = document.getElementById("sec");
let min = document.getElementById("min");

function start() {
  timerInterval = setInterval(() => {
    timer += 1 / 60;
    let msVal = Math.floor((timer - Math.floor(timer)) * 100);
    let secVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minVal = Math.floor(timer / 60);

    ms.innerText = msVal < 10 ? "0" + msVal.toString() : msVal;
    sec.innerText = secVal < 10 ? "0" + secVal.toString() : secVal;
    min.innerText = minVal < 10 ? "0" + minVal.toString() : minVal;
  }, 1000 / 60);
}
function pause() {
  clearInterval(timerInterval);
}
function reset() {
  pause();
  timer = 0;
  ms.innerText = "00";
  sec.innerText = "00";
  min.innerText = "00";
}
