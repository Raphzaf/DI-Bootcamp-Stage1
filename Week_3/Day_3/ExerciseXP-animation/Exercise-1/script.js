setTimeout(() => {
  alert("Hello World");
}, 2000);

setTimeout(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

let counter = 0;

const intervalId = setInterval(() => {
  if (counter >= 5) {
    clearInterval(intervalId);
    return;
  }

  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
  counter++;
}, 2000);

clearButton.addEventListener("click", () => {
  clearInterval(intervalId);
});
