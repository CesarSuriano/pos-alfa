//nome, email, cpf, idade, genero

let p = new Promise((resolve, reject) => {
    mostrarLoading();
    reject(1);
})
.then(validarNome)
.then(validarEmail)
.then(validarCpf)
.then(validarIdade)
.then(validarGenero)
.catch(tratarReject);

function tratarReject(reason) {
    console.log(reason);
}

function mostrarLoading() {
    console.log("Mostrar loading");
}

function validarNome(result) {
    console.log("Validar nome");
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(1)
        }, 3000);
    });
}

function validarEmail(result) {
    console.log("Validar Email");
    return result;
}

function validarCpf(result) {
    console.log("Validar Cpf");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    });
}

function validarIdade(result) {
    console.log("Validar Idade");
    return result;
}

function validarGenero(result) {
    console.log("Validar Genero");
    return result;
}
