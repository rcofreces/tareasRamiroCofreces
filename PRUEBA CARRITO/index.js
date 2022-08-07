const botonAgregar = document.getElementById("button1");
const botonEliminarUltimo = document.getElementById("button2");
const botonEliminarTodos = document.getElementById("button3");
const botonCalcularCompra = document.getElementById("button4");
const myInputProducto = document.getElementById("producto");
const myInputPrecio = document.getElementById("precio");
const myInputCantidad = document.getElementById("cantidad");
const myList = document.getElementById("lista");
const mySpan = document.getElementById("total");

let contador = 0;

function agregar() {
    let productoIngresado = myInputProducto.value;
    let precioIngresado = myInputPrecio.value;
    let cantidadIngresada = myInputCantidad.value;
    let total = myInputPrecio.value * myInputCantidad.value;
    myList.innerHTML = "PRODUCTO: " + `${productoIngresado}` +  " - CANTIDAD: " + `${cantidadIngresada}` + " - PRECIO UNITARIO: $" + `${precioIngresado}` + " - PRECIO TOTAL: $" + `${total}`;
}

function eliminarUltimo() {

}

function eliminarTodos() {
    contador = 0;
    myList.innerHTML = "";
    mySpan.innerHTML = "";
}

function calcularCompra() {
    contador = 0;
    contador += parseInt(myInputPrecio.value) * parseInt(myInputCantidad.value);
    mySpan.innerHTML = contador;
}

botonAgregar.addEventListener("click", agregar);
botonEliminarUltimo.addEventListener("click", eliminarUltimo);
botonEliminarTodos.addEventListener("click", eliminarTodos);
botonCalcularCompra.addEventListener("click", calcularCompra);