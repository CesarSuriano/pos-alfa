
/* ==== Google map ==== */
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
	disableDefaultUI: true,
	scrollwheel: false,
	draggable: true,
	/* Map position latitude and longitude */
	center: new google.maps.LatLng(40.7560187, -73.9813718),
	/* Map zoom / 0 is "Earth" and 21 is fully zoomed */
	zoom: 15,
	/* Custom map color / See documentation */
	styles: [{
		stylers: [{
			"saturation": -100
		}, {
			"lightness": 0
		}, {
			"gamma": 1
		},{
			"hue": "#58B6E6"
		}]
	}, ],
	zoom: 17,
	scrollwheel: false,
	draggable: true
	};
	var mapElement = document.getElementById('gmap');
	var map = new google.maps.Map(mapElement, mapOptions);
	var image = 'images/map-pin.png';
	/* Marker #1 */
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.7560187, -73.9813718),
		map: map,
		icon: image
	});
}