const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// to change to color of body while hovering a clock
function changeBackground() {
  document.body.style.backgroundColor = "lightblue";
}

function resetBackground() {
  document.body.style.backgroundColor = "black";
}
