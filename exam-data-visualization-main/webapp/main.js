let counter = 0;
const counterElement = document.getElementById("counter");

function increment() {
  counter++;
  counterElement.innerText = counter;
}

function decrement() {
  counter--;
  counterElement.innerText = counter;
}

function reset() {
  counter = 0;
  counterElement.innerText = counter;
}