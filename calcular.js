/*
let parcial = "";
let operRealizada = document.getElementById("holder");
let resultado = document.getElementById("resultado");

let operadorSeleccionado = "";

let numero = "";

let ultimoDigitoPrecionado = "";

function operador(num) {
  numero = numero + num;
  parcial = parcial + num;
  document.getElementById("holder").value = parcial;
  operRealizada.value = parcial;
  alert(operRealizada);
  if (numero == "0" && operadorSeleccionado == "/") {
    limpiar();
    resultado.innerHTML = "indefinido";
    return;
  }
  if (ultimoDigitoPrecionado == "operacion") {
    ultimoDigitoPrecionado = numero;
  }
}

function operacion(oper) {
  alert(oper);
}
function limpiar() {}

*/

/*
let display = document.querySelector(".ceroCal");
let currentInput = "0";
let resultado = document.querySelector(".resultado");

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.textContent = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  display.textContent = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    resultado.textContent = "Error";
  }
}

function clearDisplay() {
  currentInput = "0";
  resultado.textContent = currentInput;
}

document
  .querySelectorAll(".numero,.operador, .ceroCal, .clear")
  .forEach((button) => {
    button.addEventListener("click", (event) => {
      const value = event.target.textContent;
      if (value === "=") {
        calculate();
      } else if (value === "C") {
        clearDisplay();
      } else if (/[0-9]/.test(value)) {
        appendNumber(value);
      } else {
        appendOperator(value);
      }
    });
  });

  */
document.addEventListener("DOMContentLoaded", function () {
  // El DOM está listo, puedes acceder a los elementos HTML

  let display = document.querySelector(".display");
  let resultado = document.querySelector(".resultado");
});
let currentInput = "0";
let resultadoFinal = "";

function appendNumber(number) {
  if (resultadoFinal != "") {
    clearDisplay();

    if (currentInput === "0") {
      currentInput = number;
    } else {
      currentInput += number;
    }
  } else {
    if (currentInput === "0") {
      currentInput = number;
    } else {
      currentInput += number;
    }
  }

  display.textContent = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  display.textContent = currentInput;
}

function calculate() {
  try {
    resultadoFinal = eval(currentInput).toString();
    resultado.textContent = resultadoFinal;
  } catch (error) {
    resultado.textContent = "Error";
  }
}

function clearDisplay() {
  currentInput = "0";
  display.textContent = currentInput;
  resultadoFinal = "";
  resultado.textContent = resultadoFinal;
}
function EliminarUltimo() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput;
}
/*
document.querySelectorAll(".numero,.operador,.clear").forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.textContent;
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearDisplay();
    } else if (/[0-9]/.test(value)) {
      appendNumber(value);
    } else {
      appendOperator(value);
    }
  });
});*/
