window.onload = iniciar;

function iniciar() {
    // var botao = document.getElementById("botao");

    // botao.style.background = "yellow";
    // botao.addEventListener('click', botaoClicado);

    var form = document.getElementById("formulario");
    form.addEventListener('submit', botaoClicado);
    document.addEventListener("mousemove", movimento);
}

function movimento(e) {
    var s = e.clientX + "X " + e.clientY + "Y";
    document.getElementById("idade").value = s;
}

function botaoClicado(e) {
    //Rever
     
     var campo = document.getElementById("idade").value;
     var idade = parseInt(campo);
     if (idade < 18) {
         alert("Menor");
     } else {
         alert("Maior");
     }
     e.preventDefault();
}