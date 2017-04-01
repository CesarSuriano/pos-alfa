var array = [1, 2, 3, 4];

array.push(5)

var object = {
    presidente: "LALALA",
    vice: "LELELE"
};
//console.log(object.presidente);

var a = console.log();

function animacao(posFim) {
    setTimeout(function () {
        console.log("Terminou o setTimeout");
        setTimeout(function () {
            posFim('Fim');
        }, 3000);
    }, 2000);
}

animacao(function (a) {
    console.log("Foi");
})