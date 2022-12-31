const timeClock = document.querySelector(".time-clock");
const body = document.querySelector("body");

const MIN_DURATION = 10;

//시계함수
function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  timeClock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function makeSnowflake() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  body.appendChild(snowflake);

  setTimeout(() => {
    body.removeChild(snowflake);
    makeSnowflake();
  }, (duration + delay) * 1000);
}

getTime();
setInterval(getTime, 1000);

for (let index = 0; index < 50; index++) {
  setTimeout(makeSnowflake, 500 * index);
}

// const 변수 = setInterval(getTime, 10000);

// console.log(getTime());
// getTime();

// hours가 12 이상이면 pm 아니면 am
// const ampm = hours >= 12 ? "PM" : "AM";

// if (hours > 12) {
//   hours = hours - 12;
// }

// console.log(hours, minutes, seconds, ampm);

// clock();
// setInterval(clock, 1000);

//Date MDN
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

//setTimeout MDN
//https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

//setInterval MDN
//https://developer.mozilla.org/en-US/docs/Web/API/setInterval

//padStart MDN
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

//geeksforgeeks
//www.geeksforgeeks.org/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format/

/* <script>
// JavaScript Program to display
// current time in 24-hour format
var date = new Date();
var hours = (date.getHours() < 10 ? '0' : '') + 
    date.getHours();
var minutes = (date.getMinutes() < 10 ? '0' : '') + 
    date.getMinutes();

var div = document.getElementById('old_time');
div.innerHTML = hours + ":" + minutes;
</script> */
