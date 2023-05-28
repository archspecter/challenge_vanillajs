const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minuet = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minuet}:${second}`;
}

getClock();
setInterval(getClock, 1000);
