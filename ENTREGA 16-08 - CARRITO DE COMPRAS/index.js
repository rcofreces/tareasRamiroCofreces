let miProducto = document.querySelector(".myInputProducto");
let miCantidad = document.querySelector(".myInputCantidad");
let miPrecio = document.querySelector(".myInputPrecio");
let miOrden = document.querySelector(".myInputOrden");
let miLista = document.querySelector(".myList");
let miSpan = document.querySelector(".compraTotal");

let arrayProductos = [];
let arrayPrecios = [];
let arrayCantidadProductos = [];

let agregarAlCarrito = () => {
    console.log("ingresa")
    arrayProductos.push(miProducto);
    arrayPrecios.push(miPrecio);
    arrayCantidadProductos.push(miCantidad);
    let miItem = document.createElement("li");
    miItem.innerHTML = "Cantidad: " + miCantidad.value + " | Producto: " + miProducto.value + " | Precio: $" + miPrecio.value;
    miLista.appendChild(miItem);
    miProducto.value = "";
    miCantidad.value = "";
    miPrecio.value = "";
}

let eliminarUltimo = () => {
    arrayProductos.pop();
    arrayPrecios.pop();
    arrayCantidadProductos.pop();
    miLista.removeChild(miLista.lastChild);
}

let vaciarCarrito = () => {
    arrayProductos = [];
    arrayPrecios= [];
    arrayCantidadProductos = [];
    miLista.innerHTML = "";
}

let calcularCompra = () => {
    let total = 0;
    for (let i = 0; i < arrayProductos.length; i++) {
        total = total + (arrayPrecios[i] * arrayCantidadProductos[i]);
    }
    miSpan.innerHTML = total;
}

let eliminarPorOrden = () => {
    let orden = miOrden.value;
    miLista.removeChild(miLista.children[orden - 1]);
    miOrden.value = "";
}

let botonAgregar = document.querySelector(".agregarProducto");
botonAgregar.addEventListener("click", agregarAlCarrito);
let botonEliminarUltimo = document.querySelector(".eliminarUltimo");
botonEliminarUltimo.addEventListener("click", eliminarUltimo);
let botonVaciar = document.querySelector(".vaciarCarrito");
botonVaciar.addEventListener("click", vaciarCarrito);
let botonCalcularCompra = document.querySelector(".calcularCompra");
botonCalcularCompra.addEventListener("click", calcularCompra);
let botonEliminarOrden = document.querySelector(".eliminarOrden");
botonEliminarOrden.addEventListener("click", eliminarPorOrden);