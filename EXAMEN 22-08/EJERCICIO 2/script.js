let miInput1 = document.querySelector(".input-1");
let miInput2 = document.querySelector(".input-2");
let btn1 = document.querySelector(".btnSumar");
let btn2 = document.querySelector(".btnRestar");
let btn3 = document.querySelector(".btnMultiplicar");
let btn4 = document.querySelector(".btnDividir");
let btn5 = document.querySelector(".btnBorrar");
let miH2 = document.querySelector(".resultado");

let sumar = () => {
    let valor1 = parseFloat(miInput1.value);
    let valor2 = parseFloat(miInput2.value);
    miH2.innerHTML = `EL RESULTADO ES: ${valor1 + valor2}`;
    miInput1.value = "";
    miInput2.value = "";
}

let restar = () => {
    let valor1 = parseFloat(miInput1.value);
    let valor2 = parseFloat(miInput2.value);
    miH2.innerHTML = `EL RESULTADO ES: ${valor1 - valor2}`;
    miInput1.value = "";
    miInput2.value = "";
}

let multiplicar= () => {
    let valor1 = parseFloat(miInput1.value);
    let valor2 = parseFloat(miInput2.value);
    miH2.innerHTML = `EL RESULTADO ES: ${valor1 * valor2}`;
    miInput1.value = "";
    miInput2.value = "";
}

let dividir = () => {
    let valor1 = parseFloat(miInput1.value);
    let valor2 = parseFloat(miInput2.value);
    miH2.innerHTML = `EL RESULTADO ES: ${valor1 / valor2}`;
    miInput1.value = "";
    miInput2.value = "";
}

let borrar = () => {
    miH2.innerHTML = "";
}

btn1.addEventListener("click", sumar);
btn2.addEventListener("click", restar);
btn3.addEventListener("click", multiplicar);
btn4.addEventListener("click", dividir);
btn5.addEventListener("click", borrar);