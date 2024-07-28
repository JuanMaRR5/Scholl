const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})


let hideText_btn = document.getElementById('hideText_btn')
let hideText = document.getElementById('hideText')

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
 hideText.classList.toggle('show');
}