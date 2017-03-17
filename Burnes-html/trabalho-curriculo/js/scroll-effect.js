(function() {
	let d = document;

	function init() {
		//Links 
		let anchor1Link  = d.getElementById('mouse-link');
		// let anchor2Link  = d.getElementById('anchor2Link');
		// let anchor3Link  = d.getElementById('anchor3Link');
		// let anchor4Link  = d.getElementById('anchor4Link');
		// let anchor1Link2 = d.getElementById('anchor1Link2');
		// let anchor2Link2 = d.getElementById('anchor2Link2');
		// let anchor3Link2 = d.getElementById('anchor3Link2');
		// let anchor4Link2 = d.getElementById('anchor4Link2');
		//Anchors
		let anchor1      = d.getElementById('sobre');
		// let anchor2      = d.getElementById('anchor2');
		// let anchor3      = d.getElementById('anchor3');
		// let anchor4      = d.getElementById('anchor4');
		
		anchor1Link.addEventListener('click', (e) => { scrollTo(anchor1, e) }, false);
		//anchor1Link2.addEventListener('click', (e) => { scrollTo(anchor1, e) }, false);
		// anchor2Link.addEventListener('click', (e) => { scrollTo(anchor2, e) }, false);
		// anchor2Link2.addEventListener('click', (e) => { scrollTo(anchor2, e) }, false);
		// // anchor2Link.onclick = function() { scrollToSimple(document.documentElement, 500, 3000); }
		// // anchor2Link2.onclick = function() { scrollToSimple(document.documentElement, 0, 3000); }
		// anchor3Link.addEventListener('click', (e) => { scrollTo(anchor3, e) }, false);
		// anchor3Link2.addEventListener('click', (e) => { scrollTo(anchor3, e) }, false);
		// anchor4Link.addEventListener('click', (e) => { scrollTo(anchor4.offsetTop, e) }, false);
		// anchor4Link2.addEventListener('click', (e) => { scrollTo(anchor4.offsetTop, e) }, false);
		
		// console.log(anchor2); //DEBUG
		// console.log('anchor1: '+scrollTopValue(anchor1)+' / '+offsetTopValue(anchor1)); //DEBUG
		// console.log('anchor2: '+scrollTopValue(anchor2)+' / '+offsetTopValue(anchor2)); //DEBUG
		// console.log('anchor3: '+scrollTopValue(anchor3)+' / '+offsetTopValue(anchor3)); //DEBUG
		// console.log('anchor4: '+scrollTopValue(anchor4)+' / '+offsetTopValue(anchor4)); //DEBUG
		// // d.addEventListener('scroll', (e) => { console.log(e) }, false); //DEBUG
		
		// console.log('App loaded. Have fun!');
	}
	
	function scrollTopValue(domElement) { //DEBUG
		return 'scrollTopValue:', domElement.scrollTop;
	}
	function offsetTopValue(domElement) { //DEBUG
		return 'offsetTopValue:', domElement.offsetTop;
	}

	/*function scrollToSimple(element, to, duration) { //FIXME finish this
		if (duration < 0) return;
		var difference = to - element.offsetTop;
		var perTick = difference / duration * 10;
		console.log('perTick', perTick); //DEBUG

		setTimeout(function() {
			console.log('element.scrollTop:', element.scrollTop); //DEBUG
			element.scrollTop += perTick;
			console.log('element.scrollTop:', element.scrollTop); //DEBUG
			scrollTo(element, to, duration - 10);
		}, 10);
	}*/

	//cf. https://gist.github.com/james2doyle/5694700
	// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
	var requestAnimFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	function scrollTo(to, callback, duration = 1500) { //FIXME this always starts from '0', instead of the clicked element offsetTop -> This is because the position is calculated for the main <html> element, not the <iframe>'s <html> tag
		/*console.log('from:', from); //DEBUG
		// console.log('from.clientY:', from.clientY); //DEBUG
		// console.log('from.target.offsetTop:', from.target.offsetTop); //DEBUG
		
		// console.log('position():', document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop); //DEBUG
		// console.log('document.documentElement:', document.documentElement); //DEBUG
		// console.log('document.body:', document.body); //DEBUG
		let start;
		
		if (isMouseEvent(from)) { //FIXME : the scroll starts at the link, not where the screen really is : fix that
			// start = from.target.offsetTop;
			start = from.pageY; //FIXME
		}
		else {
			start = from;
		}*/
		
		if (isDomElement(to)) {
			// console.log('this is an element:', to); //DEBUG
			to = to.offsetTop;
		}
		/*else {
			// console.log('this is NOT an element:', to); //DEBUG
		}*/
		
		// because it's so fucking difficult to detect the scrolling element, just move them all
		function move(amount) {
			// document.scrollingElement.scrollTop = amount; //FIXME Test that
			document.documentElement.scrollTop = amount;
			document.body.parentNode.scrollTop = amount;
			document.body.scrollTop = amount;
		}

		function position() {
			return document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop;
		}
		
		var start = position(),
			change = to - start,
			currentTime = 0,
			increment = 20;
		console.log('start:', start); //DEBUG
		console.log('to:', to); //DEBUG
		console.log('change:', change); //DEBUG
		
		var animateScroll = function() {
			// increment the time
			currentTime += increment;
			// find the value with the quadratic in-out easing function
			var val = Math.easeInOutQuad(currentTime, start, change, duration);
			// move the document.body
			move(val);
			// do the animation unless its over
			if (currentTime < duration) {
				requestAnimFrame(animateScroll);
			}
			else {
				if (callback && typeof(callback) === 'function') {
					// the animation is done so lets callback
					callback();
				}
			}
		};
		
		animateScroll();
	}

	init();
})();

//-------------------- Unimportant js functions --------------------
// easing functions http://goo.gl/5HLl8
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
	t /= d / 2;
	if (t < 1) {
		return c / 2 * t * t + b
	}
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
	var tc = (t /= d) * t * t;
	return b + c * (tc);
};

Math.inOutQuintic = function(t, b, c, d) {
	var ts = (t /= d) * t,
		tc = ts * t;
	return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

function isDomElement(obj) {
    return obj instanceof Element;
}

function isMouseEvent(obj) {
    return obj instanceof MouseEvent;
}

function findScrollingElement(element) { //FIXME Test this too
	do {
		if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
			return element;
		}
	} while (element = element.parentNode);
}
