const botonAgregar = document.getElementById("button1");
const botonEliminarUltimo = document.getElementById("button2");
const botonEliminarTodos = document.getElementById("button3");
const botonCalcularCompra = document.getElementById("button4");
const myInputProducto = document.getElementById("producto");
const myInputPrecio = document.getElementById("precio");
const myList = document.getElementById("lista");
const mySpan = document.getElementById("total");

let contador = 0;

function agregar() {
    let productoIngresado = myInputProducto.value;
    let precioIngresado = myInputPrecio.value;
    myList.innerHTML = productoIngresado + " ($" + `${precioIngresado}` + ")";
}



function eliminarUltimo() {

}

function eliminarTodos() {
    contador = 0;
    myList.innerHTML = "";
}

function calcularCompra() {
    contador = 0;
    contador += parseInt(myInputPrecio.value)
    mySpan.innerHTML = contador;
}

botonAgregar.addEventListener("click", agregar);
botonEliminarUltimo.addEventListener("click", eliminarUltimo);
botonEliminarTodos.addEventListener("click", eliminarTodos);
botonCalcularCompra.addEventListener("click", calcularCompra);