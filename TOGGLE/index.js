let btns = document.querySelectorAll('.btn');

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e){
  let el = this.nextElementSibling;
  el.classList.toggle("ver");
  });
}  
