const time = document.getElementById("time");
const message = document.getElementById("message");

const button = document.getElementById("button");

button.addEventListener("click", () => {
  let min = Number(document.getElementById("minutes").value);
  let sec = Number(document.getElementById("seconds").value);
  let total = sec + min * 60;
  console.log(total);
  time.innerHTML = min + " : " + sec;
  const interval = setInterval(() => {
    sec--;
    time.innerHTML = min + " : " + sec;

    if (sec === 0 && min !== 0) {
      sec = 60;
      min--;
    }
  }, 1000);

  setTimeout(() => {
    message.innerHTML = "The time's up.";
    clearInterval(interval);
  }, total * 1000);
});
