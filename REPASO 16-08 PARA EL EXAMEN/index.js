let inputOne = document.querySelector(".input-1");
let inputTwo = document.querySelector(".input-2");
let inputThree = document.querySelector(".input-3");
let ghost = document.querySelector(".text-ghost");

let alertFunction = () => {
   alert(inputOne.value);
   inputOne.value = "";
}

let aHundredTimes = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(inputTwo.value);
    }
    inputTwo.value = "";
}

let ghostFunction = () => {
    ghost.style.visibility = "visible";
    inputThree.value = "";
}

let btnOne = document.querySelector(".btn-1");
btnOne.addEventListener("click", alertFunction);
let btnTwo = document.querySelector(".btn-2");
btnTwo.addEventListener("click", aHundredTimes);
let btnThree = document.querySelector(".btn-3");
btnThree.addEventListener("click", ghostFunction);