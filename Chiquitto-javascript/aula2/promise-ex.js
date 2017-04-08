window.onload = () => {

    document.getElementById('botao').addEventListener('click',botaoClicado);

}

function  botaoClicado() {
    let p = new Promise((resolve, reject) => {
        mostrarLoading();
        resolve({});
    })
    .then(pegarValor1)
    .then(pegarValor2)
    .then(converterValores)
    .then(calcularResultado)
    .then(mostrarResultado)
    .then(esconderLoading)
    ;
}

function mostrarLoading() {
    console.log('Mostrar Loading');
}

function esconderLoading() {
    console.log('Esconder Loading');
}

function pegarValor1(result) {
    let campo = document.getElementById('numero1');
    result.valor1 = campo.value;
    return result;
}

function pegarValor2(result) {
    let campo = document.getElementById('numero2');
    result.valor2 = campo.value;
    return result;
}

function calcularResultado(result) {
    result.resultado = result.valor1 + result.valor2;

    return result.resultado;
}

function converterValores(result) {
    result.valor1 = parseInt(result.valor1);
    result.valor2 = parseInt(result.valor2);

    return result;
}

function mostrarResultado(result) {
    alert(result);
}