const input = document.getElementById("input");
const calculatorButtons = document.querySelector(".calculator-buttons");

const botones = [
  { valor: "CE" },
  { valor: "C" },
  { valor: "/" },
  { valor: "*" },
  { valor: "-" },
  { valor: "+" },
  { valor: "=" },
  { valor: "√" },
];

botones.forEach((boton) => {
  const operationButtons = document.createElement("button");
  operationButtons.innerHTML = boton.valor;
  operationButtons.classList = "operations";

  operationButtons.addEventListener("click", () => {
    const expression = input.value;
    switch (boton.valor) {
      case "CE":
        input.value = "";
        break;

      case "C":
        input.value = input.value.slice(0, -1);
        break;

      case "/":
        input.value = input.value + "/";
        break;

      case "*":
        input.value = input.value + "*";
        break;

      case "-":
        input.value = input.value + "-";
        break;

      case "+":
        input.value = input.value + "+";
        break;

      case "√":
        input.value = input.value + "√";
        break;

      case "=":
        if (expression.includes("√")) {
          squareRoot();
        } else {
          division();
          multiplication();
          substract();
          add();
        }
        break;

      default:
    }
  });
  calculatorButtons.appendChild(operationButtons);
});

for (let index = 0; index < 10; index++) {
  const button = document.createElement("button");
  button.value = index;
  button.innerHTML = index;
  button.addEventListener("click", () => {
    input.value += button.value;
  });
  calculatorButtons.appendChild(button);
}

function division() {
  const expression = input.value;
  const result = eval(expression);
  input.value = result;
}

function multiplication() {
  const expression = input.value;
  const result = eval(expression);
  input.value = result;
}

function add() {
  const expression = input.value;
  const result = eval(expression);
  input.value = result;
}

function substract() {
  const expression = input.value;
  const result = eval(expression);
  input.value = result;
}

function squareRoot() {
  const expression = input.value;
  const parts = expression.split("√");
  const numero = parseFloat(parts[1]);
  const resultado = Math.sqrt(numero);
  input.value = resultado;
}