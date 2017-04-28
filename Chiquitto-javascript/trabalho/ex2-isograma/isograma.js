let inputPalavra = document.getElementById("palavra");
let lblResultado = document.getElementById("resultado");

let clickVerifica = () => {
    let palavra = inputPalavra.value;

    if(verificaPalavra(palavra)){
        lblResultado.innerHTML = "É um isograma!" ;
    } else {
        lblResultado.innerHTML = "Não é um isograma!";
    }
}

let verificaPalavra = (palavra) => {
    let palavraOriginal = palavra;
    let palavraQuebrada = Array.from(palavra);
    let contador = 0;
    let ocorrencias = [];
    for(let i of palavraQuebrada){
        ocorrencias[i] = ocorrencias[i] ? ocorrencias[i] + 1 : 1;
        contador ++;

        if(ocorrencias[i] > 1) {
            return true;
        }
    }
    return false;
}