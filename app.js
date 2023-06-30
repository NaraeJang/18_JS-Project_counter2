// Constructor function : To create multiple instances.
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.decreaseBtn = element.querySelector(".decrease");
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;

  console.log(this.resetBtn);
}

// Create new instances.
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

// To get me the element.
function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists.`
  ); //By adding Error, you can notice what is wrong.
}
