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




/*

let miEntrada = document.querySelector(".myInput");
let miLista = document.querySelector(".myOl");
let miIndice = document.querySelector(".myInputOrden");

let agregarTarea = () => {
    let miItem = document.createElement("li");
    miItem.innerHTML = miEntrada.value;
    miLista.appendChild(miItem);
    miEntrada.value = "";
}

let eliminarUltTarea = () => {
    miLista.removeChild(miLista.lastChild);
}

let eliminarTodo = () => {
    miLista.innerHTML = "";
}

let eliminarOrdenTarea = () => {
    let valor = miIndice.value;
    miLista.removeChild(miLista.children[valor - 1]);
}

let botonAgregar = document.querySelector(".addBtn");
botonAgregar.addEventListener("click", agregarTarea);

let botonEliminarUlt = document.querySelector(".removeBtn");
botonEliminarUlt.addEventListener("click", eliminarUltTarea);

let botonEliminarTodo = document.querySelector(".removeAll");
botonEliminarTodo.addEventListener("click", eliminarTodo);

let botonEliminarTarea = document.querySelector(".removeOrdenBtn");
botonEliminarTarea.addEventListener("click", eliminarOrdenTarea);

*/






/*

let productos = [];
let preciosUnitarios= [];
let cantidadDeProductos = [];
let total = 0;

let miLista = document.querySelector(".carrito");

let btnAgregar = document.getElementById("agregarProducto");
btnAgregar.addEventListener("click",agregarProductoAlCarrito);

let btnCalcular = document.getElementById("calcularTotal");
btnCalcular.addEventListener("click", calcularCompra);

let btnEliminarUltimo = document.getElementById("eliminarUltimo");
btnEliminarUltimo.addEventListener("click", eliminarUltimo)


let btnVaciarCarrito = document.getElementById("vaciarCarrito");
btnVaciarCarrito.addEventListener("click", eliminarTodo);

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
    miItem.innerHTML = "PRODUCTO | CANTIDAD | PRECIO_UNITARIO"
    miItem.innerHTML = producto + "  |  " + cantidadDeProducto + "  |  " + precioUnitario; 

    miItem.classList.add("colorVerde");

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

    console.log (productos);
    console.log (preciosUnitarios);
    console.log (cantidadDeProductos);
}

function eliminarTodo (){
    productos = [];
    preciosUnitarios= [];
    cantidadDeProductos = [];
    
    console.log (productos);
    console.log (preciosUnitarios);
    console.log (cantidadDeProductos);
}


*/