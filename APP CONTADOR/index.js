const botonRestar = document.getElementById("button1");
const botonSumar = document.getElementById("button2");
const botonSumarDeA = document.getElementById("button3");
const botonBorrar = document.getElementById("button4");
const myInput = document.querySelector("input");
const mySpan = document.querySelector("span");

let cantidad = 0;

function decrementar() {
    cantidad--;
    mySpan.innerHTML = cantidad;
    console.log("Decrementaste" + cantidad);
}

function incrementar() {
    cantidad++;
    mySpan.innerHTML = cantidad;
    console.log("Incrementaste" + cantidad);
}

function incrementarDeA() {
    cantidad += parseInt(myInput.value)
    mySpan.innerHTML = cantidad;
    console.log("Incrementaste de a" + cantidad);
}

function borrarCuenta() {
    cantidad = 0;
    mySpan.innerHTML = "";
}

botonRestar.addEventListener("click", decrementar);
botonSumar.addEventListener("click", incrementar);
botonSumarDeA.addEventListener("click", incrementarDeA);
botonBorrar.addEventListener("click", borrarCuenta);