//시계함수
function clock() {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  // hours가 12 이상이면 pm 아니면 am
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;

  console.log(hours, minutes, seconds, ampm);
}

clock();
const digitalTimer = setInterval(clock, 1000);

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
