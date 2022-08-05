"use strict";

let contador = 0;

function clickear() {
    contador++;
    alert("Hiciste " + contador + " clicks");
}

let botonContar = document.getElementById("clickear");
botonContar.addEventListener("click", clickear);