let inputAno = document.getElementById("ano");
let lblResultado = document.getElementById("resultado");

let clickVerifica = () => {
    let ano = inputAno.value;
     if(verificaAno(ano)){
        lblResultado.innerHTML = "É bissexto!";
     } else {
        lblResultado.innerHTML = "Não é bissexto!"
     }
}

let verificaAno = (ano) => {
    
    if ((ano % 4 == 0) && ((ano % 100) != 0 || (ano % 400) == 0)) {
        return true;
    } else {
        return false;
    }
}