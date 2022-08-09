let miProducto = document.querySelector(".myInputProducto");
let miCantidad = document.querySelector(".myInputCantidad");
let miPrecio = document.querySelector(".myInputPrecio");
let miOrden = document.querySelector(".myInputOrden");
let miLista = document.querySelector(".myList");
let miSpan = document.querySelector(".compraTotal");

let productos = [];
let preciosUnitarios= [];
let cantidadProductos = [];
let total = 0;

let agregarAlCarrito = () => {
    let miItem = document.createElement("li");
    miItem.innerHTML = miCantidad.value + " - " + miProducto.value + " - $" + miPrecio.value;
    miLista.appendChild(miItem);
    miProducto.value = "";
    miCantidad.value = "";
    miPrecio.value = "";
}

let eliminarUltimo = () => {
    miLista.removeChild(miLista.lastChild);
}

let vaciarCarrito = () => {
    miLista.innerHTML = "";
}

//let calcularCompra = () => {
//}

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
//let botonCalcularCompra = document.querySelector(".calcularCompra");
//botonCalcularCompra.addEventListener("click", calcularCompra);
let botonEliminarOrden = document.querySelector(".eliminarOrden");
botonEliminarOrden.addEventListener("click", eliminarPorOrden);






/* EJERCICIO DANI --------------------------------------------------------------------------------------------------------------

let productos = [];
let preciosUnitarios= [];
let cantidadDeProductos = [];
let total = 0;

function agregarProductoAlCarrito(){

    let producto = document.getElementById("productoNuevo").value;
    productos.push(producto);
    let precioUnitario = document.getElementById("precioUnitario").value;
    preciosUnitarios.push(precioUnitario);
    let cantidadDeProducto = document.getElementById("cantidadUnitaria").value;
    cantidadDeProductos.push(cantidadDeProducto);

    console.log (productos);
    console.log (preciosUnitarios);
    console.log (cantidadDeProductos);

    let miItem = document.createElement("li");
    miItem.innerHTML = producto + "  |  " + cantidadDeProducto + "  |  " + precioUnitario;


    //miItem.classList.add("colorVerde");

    miLista.appendChild(miItem);

    document.getElementById("productoNuevo").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("cantidadUnitaria").value = "";

}

function calcularCompra(){
    for(let i=0; i<productos.length;i++){
        total = total + parseInt((preciosUnitarios[i] * cantidadDeProductos[i]));
    }

    let h2 = document.createElement("h2");
    h2.innerHTML = "Total de su Compra " + total;
    miLista.appendChild(h2);
}

function eliminarUltimo (){
    productos.pop();
    preciosUnitarios.pop();
    cantidadDeProductos.pop();

    miLista.removeChild(miLista.lastChild)
}

function eliminarTodo (){
    productos = [];
    preciosUnitarios= [];
    cantidadDeProductos = [];

    miLista.innerHTML = "";
    
}



let miLista = document.querySelector(".carrito");

let btnAgregar = document.getElementById("agregarProducto");
btnAgregar.addEventListener("click",agregarProductoAlCarrito);

let btnCalcular = document.getElementById("calcularTotal");
btnCalcular.addEventListener("click", calcularCompra);

let btnEliminarUltimo = document.getElementById("eliminarUltimo");
btnEliminarUltimo.addEventListener("click", eliminarUltimo)

let btnVaciarCarrito = document.getElementById("vaciarCarrito");
btnVaciarCarrito.addEventListener("click", eliminarTodo);

*/