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