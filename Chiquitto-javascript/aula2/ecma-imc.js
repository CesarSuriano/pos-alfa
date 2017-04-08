let peso = document.getElementById("peso");
let altura = document.getElementById("altura");

let resultado = document.getElementById("resultado");

let button_click = () => resultado.innerHTML = peso.value / (altura.value * altura.value) ;