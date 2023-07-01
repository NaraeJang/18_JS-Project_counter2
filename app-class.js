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

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.decreaseBtn = element.querySelector(".decrease");
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    // bind this to all functions. By using bind, we can indicate this to this.counter.
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.increase = this.increase.bind(this);

    // Add event listeners.
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
    this.increaseBtn.addEventListener("click", this.increase);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
}

// Create new instances.
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
