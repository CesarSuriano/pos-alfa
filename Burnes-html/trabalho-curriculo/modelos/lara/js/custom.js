$(document).ready(function() {
	
	'use strict';
	
	/* ==== Preloader ==== */
	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut();
	
	/* ==== Full Height ==== */
	$(function(){
		$('.full-height').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('.full-height').css({'height':($(window).height())+'px'});
		});
	});

	/* ==== Home Slider ==== */
	$('#home-slider').owlCarousel({
    	singleItem : true,
    	transitionStyle : 'goDown',
    	mouseDrag:false,
    	touchDrag:false,
    	autoPlay : 4000
	});
	
	/* ==== Team Carousel ==== */
	$('#carousel-team').owlCarousel({
    	singleItem : true,
    	transitionStyle : 'fadeUp',
    	mouseDrag:false,
    	touchDrag:false,
    	autoPlay : 4000,
		pagination:true
	});
	
	/* ==== Boxer ==== */
	$('.boxer').boxer();
	
	/* ==== Contact Form ==== */
	var options = {
		target: '.message .alert',
		beforeSubmit: showRequest,
		success: showResponse
	};

	$('#contactForm').ajaxForm(options);
	function showRequest(formData, jqForm, options) {
		var queryString = $.param(formData);
			return true;
		}
	function showResponse(responseText, statusText) {}
});