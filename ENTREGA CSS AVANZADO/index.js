let footer = document.querySelector(".footer");
const colors=["blue", "yellow", "green", "pink", "white"];

function changeColor() {
    let i = parseInt(Math.random()*colors.length);
    footer.style.background = colors[i];
}

let button = document.querySelector(".btn");
button.addEventListener("click", changeColor);
