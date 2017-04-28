let clickCalcular = () => {
    Promise.resolve(null)
    .then(pegarGasolina)
    .then(pegarAlcool)
    .then(calcularValores)
    .then(mostrarResultado);
}

let pegarGasolina = () => {
    let inputGasolina = document.getElementById("valor_gasolina");
    return inputGasolina.value;
}

let pegarAlcool = (valorGasolina) => {
    let valores = {};
    let inputEtanol = document.getElementById("valor_etanol");

    valores.gasolina = valorGasolina;
    valores.etanol = inputEtanol.value;
    return valores
}

let calcularValores = (valores) => {
    let resultado = valores.etanol / valores.gasolina;
    return resultado;
}

let mostrarResultado = (resultado) => {
    let lblResultado = document.getElementById("resultado");
    if (resultado > 0.70) {
        lblResultado.innerHTML = "Vai de Gasolina!";
    } else {
        lblResultado.innerHTML = "Vai de Etanol!";
    }
}