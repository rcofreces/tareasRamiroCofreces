let inputUno = document.getElementById("inUno");
let inputDos = document.getElementById("inDos");
let inputTres = document.getElementById("inTres");
let gost = document.getElementById("text-fantasma");

function alerta () {
    alert(inputUno.value);
}

function porCien (){
    for (let i=1; i<=100; i++ ){
        console.log(inputDos.value);
    }
}

function fantasma () {
    gost.style.visibility= 'visible';
}

let btnUno = document.getElementById("btnUno");
btnUno.addEventListener("click", alerta);

let btnDos = document.getElementById("btnDos");
btnDos.addEventListener("click", porCien);

let btnTres = document.getElementById("btnTres");
btnTres.addEventListener("click", fantasma);