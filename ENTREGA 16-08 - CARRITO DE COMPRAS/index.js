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
    let producto = document.querySelector(".myInputProducto").value;
    arrayProductos.push(producto);
    let precio = parseInt(document.querySelector(".myInputPrecio").value);
    arrayPrecios.push(precio);
    let cantidad = parseInt(document.querySelector(".myInputCantidad").value);
    arrayCantidadProductos.push(cantidad);
    let miItem = document.createElement("li");
    miItem.innerHTML = "Cantidad: " + cantidad + " | Producto: " + producto + " | Precio Unitario: $" + precio;
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
        total = total + parseInt((arrayPrecios[i] * arrayCantidadProductos[i]));
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