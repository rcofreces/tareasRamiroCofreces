let cantidad = 0;

function decrementar() {
    cantidad--;
    console.log("Decrementaste" + cantidad);
}

function incrementar() {
    cantidad++;
    console.log("Incrementaste" + cantidad);
}

let botonRestar = document.getElementById("button1");
botonRestar.addEventListener("click", decrementar);

let botonSumar = document.getElementById("button2");
botonSumar.addEventListener("click", incrementar);

/*function incrementarDeA() {
    cantidad++;
    console.log("Incrementaste" + cantidad);
}*/

//<input type="text" class="resultado" id="resultadoTotal">
