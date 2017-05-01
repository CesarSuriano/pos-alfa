var player = "X";

function verificaVencedor()
{
    // Linhas
    for (var i = 0; i < 3; i++) {
        if ($('#t1 tr:eq('+i+') td:eq(0)').html() != '' &&
            $('#t1 tr:eq('+i+') td:eq(0)').html() == $('#t1 tr:eq('+i+') td:eq(1)').html() &&
            $('#t1 tr:eq('+i+') td:eq(0)').html() == $('#t1 tr:eq('+i+') td:eq(2)').html()) {
            $('#t1 tr:eq('+i+') td').css('background', '#fcc');
            $('body').append('<p>' + $('#t1 tr:eq('+i+') td:eq(0)').html() + ' ganhou!</p>');
            $('td').unbind('click');
            return true;
        }
    }

    // Colunas
    for (var i = 0; i < 3; i++) {
        if ($('#t1 tr:eq(0) td:eq(' + i + ')').html() != '' &&
            $('#t1 tr:eq(0) td:eq(' + i + ')').html() == $('#t1 tr:eq(1) td:eq(' + i + ')').html() &&
            $('#t1 tr:eq(0) td:eq(' + i + ')').html() == $('#t1 tr:eq(2) td:eq(' + i + ')').html()) {
            $('#t1 tr:eq(0) td:eq('+i+')').css('background', '#fcc');
            $('#t1 tr:eq(1) td:eq('+i+')').css('background', '#fcc');
            $('#t1 tr:eq(2) td:eq('+i+')').css('background', '#fcc');
            $('body').append('<p>' + $('#t1 tr:eq(0) td:eq('+i+')').html() + ' ganhou!</p>');
            $('td').unbind('click');
            return true;
        }
    }

    //Diagonal
    if ($('#t1 tr:eq(0) td:eq(0)').html() != '' &&
        $('#t1 tr:eq(0) td:eq(0)').html() == $('#t1 tr:eq(1) td:eq(1)').html() &&
        $('#t1 tr:eq(0) td:eq(0)').html() == $('#t1 tr:eq(2) td:eq(2)').html()) {
        $('#t1 tr:eq(0) td:eq(0)').css('background', '#fcc');
        $('#t1 tr:eq(1) td:eq(1)').css('background', '#fcc');
        $('#t1 tr:eq(2) td:eq(2)').css('background', '#fcc');
        $('body').append('<p>' + $('#t1 tr:eq(0) td:eq(0)').html() + ' ganhou!</p>');
        $('td').unbind('click');
        return true;
    }
    if ($('#t1 tr:eq(0) td:eq(2)').html() != '' &&
        $('#t1 tr:eq(0) td:eq(2)').html() == $('#t1 tr:eq(1) td:eq(1)').html() &&
        $('#t1 tr:eq(0) td:eq(2)').html() == $('#t1 tr:eq(2) td:eq(0)').html()) {
        $('#t1 tr:eq(0) td:eq(2)').css('background', '#fcc');
        $('#t1 tr:eq(1) td:eq(1)').css('background', '#fcc');
        $('#t1 tr:eq(2) td:eq(0)').css('background', '#fcc');
        $('body').append('<p>' + $('#t1 tr:eq(0) td:eq(2)').html() + ' ganhou!</p>');
        $('td').unbind('click');
        return true;
    }
    
    // Empate
    var l = $('#t1 td:empty').length;
    if (l == 0) {
        $('body').append('<p>Empate!</p>');
        $('td').unbind('click');
        return true;
    }
}

function iniciaVelha()
{
    $('td').html('');
    $('td').css('background', '#fff');
    $('td').unbind('click');
    $('td').click(function() {
        if ($(this).html() == "") {
            $(this).html(player);
            
            if (player == "X") player = "O";
            else player = "X";
            
            $('#jogador span').html(player);
        }

        verificaVencedor();
    });
    $('p').remove();
    $('#jogador span').html(player);
}

$(document).ready(function() {
    iniciaVelha();
    $('#inicia').click(function() {
        iniciaVelha();
    });
});