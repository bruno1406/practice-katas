let up = document.getElementById("counter-value");

document.getElementById("counter-increment").onclick = () => {
  if (Number(up.innerText) < 10) {
    up.innerText = Number(up.innerText) + 1;
  }
};
document.getElementById("counter-decrement").onclick = () => {
  if (Number(up.innerText) > 0) {
    up.innerText = Number(up.innerText) - 1;
  }
};
