//accessing 2 paragraphs
const time = document.getElementById("time");
const message = document.getElementById("message");

//accessing the button
const button = document.getElementById("button");

//adding a event, when the button is clicked, the values from Minutes and Seconds are taken
button.addEventListener("click", () => {
  let min = Number(document.getElementById("minutes").value);
  let sec = Number(document.getElementById("seconds").value);
  //total is necessary for the setTimeout, to know when the Interval should be stopped and when to display a message
  let total = sec + min * 60;
  //initial text
  time.innerHTML = min + " : " + sec;
  //interval - 1 second is subtracted and the text is updated every second
  const interval = setInterval(() => {
    sec--;
    time.innerHTML = min + " : " + sec;

    //if the seconds reach 0 and there are still some minutes, the seconds must go back to 60 and 1 minute is subtracted
    if (sec === 0 && min !== 0) {
      sec = 60;
      min--;
    }
  }, 1000);

  //timeout - showing final message and stopping the interval
  setTimeout(() => {
    message.innerHTML = "The time's up.";
    clearInterval(interval);
  }, total * 1000);
});
