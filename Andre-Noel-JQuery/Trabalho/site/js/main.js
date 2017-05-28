$('.banners').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
});


$('#nascimento').datepicker();
$('#telefone').mask('(00)00000-0000');


$.ajax({
	url: "json/estados-cidades.json",
	dataType: "json",
	type: "GET"
}).done(function (data) {
	var html = '';
	for (var i in data.estados) {
		html += '<option value=' + i + '>' + data.estados[i].nome + '</option>';
	}
	$("#estado").append(html);
});

$("#estado").click(function () {
	var estado = $(this).val();
	$.ajax({
		url: "json/estados-cidades.json",
		dataType: "json",
		data: { estado: estado },
		type: "GET"
	}).done(function (data) {
		var html = '';
		if ($('#estado').val() != 'Selecione') {
			for (var i in data.estados[estado].cidades) {
				html += '<option value=' + i + '>' + data.estados[estado].cidades[i] + '</option>';
			}
			$("#cidade").html(html);
		}
	});
});

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

function voltar_topo(){
	$('html, body').animate({scrollTop:0}, 'slow'); 
}