jQuery.fn.myPlugin = function () {
    var texto = $(this).val();
    $(this).each(function () {
        texto = texto.replace(/e/ig, 'enter');
        texto = texto.replace(/i/ig, 'inis');
        texto = texto.replace(/o/ig, 'omber');
        texto = texto.replace(/u/ig, 'ufter');
        texto = texto.replace(/a/ig, 'ais');

    });
    return texto;
}