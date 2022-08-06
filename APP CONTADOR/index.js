const botonRestar = document.getElementById("button1");
const botonSumar = document.getElementById("button2");
const botonSumarDeA = document.getElementById("button3");
const myInput = document.querySelector("input");
const mySpan = document.getElementById("resultado");

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

botonRestar.addEventListener("click", decrementar);
botonSumar.addEventListener("click", incrementar);



/*function incrementarDeA() {
    mySpan = myInput.value
    cantidad++;
    console.log("Incrementaste" + cantidad);
}*/
