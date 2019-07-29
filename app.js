// Calculator UI
const calcUI = (function() {
  const calculator = `
        <div class="calculator-body">
          <form>
           <input type="number" />
          </form>
        <div class="buttons">
          <ul>
            <li class="ac">AC</li>
            <li class="pl-min">+/-</li>
            <li class="percent">%</i></li>
            <li class="divide">/</i></li>
            <li class="seven">7</li>
            <li class="eight">8</li>
            <li class="nine">9</li>
            <li class="times">*</i></li>
            <li class="four">4</li>
            <li class="five">5</li>
            <li class="six">6</li>
            <li class="minus">-</i></li>
            <li class="one">1</li>
            <li class="two">2</li>
            <li class="three">3</li>
            <li class="plus">+</i></li>
            <li id="zero">0</li>
            <li class="dot">.</li>
            <li class="equal">=</li>
          </ul>
        </div>
        </div>
    `;

  return {
    calculatorBody: () => {
      document.querySelector("body").innerHTML = calculator;
    }
  };
})();

// Mathematical operations
const calcOp = (function() {
  return {
    numbers: element => {
      if (element !== null) {
        document.querySelector(`${element}`).addEventListener("click", e => {
          console.log(parseInt(e.target.innerHTML));
        });
      }
    },
    operators: operator => {
      if (operator !== null) {
        document.querySelector(`${operator}`).addEventListener("click", e => {
          console.log(e.target.innerHTML);
        });
      }
    },
    addition: (firstValue, secondValue) => {
      const result = firstValue + secondValue;
      return result;
    },
    subtraction: (minued, subtrahend) => {
      return minued - subtrahend;
    },
    multiplication: (multiplier, multiplicand) => {
      return multiplier * multiplicand;
    },
    division: (dividend, divisor) => {
      return dividend / divisor;
    },
    changeToOpposite: value => {
      return value * -1;
    }
  };
})();

// App
const App = (function(calcUI, calcOp) {
  // const calcElements = [
  //   { value: ".ac" },
  //   { value: ".pl-min" },
  //   { value: ".percent" },
  //   { value: ".divide" },
  //   { value: ".seven" },
  //   { value: ".eight" },
  //   { value: ".nine" },
  //   { value: ".times" },
  //   { value: ".four" },
  //   { value: ".five" },
  //   { value: ".six" },
  //   { value: ".minus" },
  //   { value: ".one" },
  //   { value: ".two" },
  //   { value: ".three" },
  //   { value: ".plus" },
  //   { value: "#zero" },
  //   { value: ".dot" },
  //   { value: ".equal" }
  // ];

  // numbers
  const numbers = [
    { value: ".seven" },
    { value: ".eight" },
    { value: ".nine" },
    { value: ".four" },
    { value: ".five" },
    { value: ".six" },
    { value: ".one" },
    { value: ".two" },
    { value: ".three" },
    { value: "#zero" }
  ];

  // operators
  const operators = [
    { value: ".ac" },
    { value: ".pl-min" },
    { value: ".percent" },
    { value: ".divide" },
    { value: ".plus" },
    { value: ".times" },
    { value: ".minus" },
    { value: ".dot" },
    { value: ".equal" }
  ];
  return {
    init: () => {
      calcUI.calculatorBody();

      // numbers
      numbers.map(item => calcOp.numbers(item.value));
      // operators
      operators.map(item => calcOp.operators(item.value));

      // addition
      calcOp.addition();
    }
  };
})(calcUI, calcOp);

App.init();
