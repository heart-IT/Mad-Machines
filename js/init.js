/* global WheelIndicator */
/* global $ */
// $(document).ready(function() {

var Jump = new Jump();

var currentSlide = "about",
	isAnimating = false;

var keyCodes = {
	UP: 38,
	PAGE_UP: 33,
	DOWN: 40,
	PAGE_DOWN: 34
};

$(window).on("keydown", onKeyDown);

function onKeyDown(event) {
	var PRESSED_KEY = event.keyCode;

	if (PRESSED_KEY === keyCodes.UP || PRESSED_KEY === keyCodes.PAGE_UP) {
		if (!isAnimating) {
			isAnimating = true;
			goToPrevSlide();
			event.preventDefault();
		}
	} else if (PRESSED_KEY === keyCodes.DOWN || PRESSED_KEY === keyCodes.PAGE_DOWN) {
		if (!isAnimating) {
			isAnimating = true;
			goToNextSlide();
			event.preventDefault();
		}
	}
}

new WheelIndicator({
	callback: function (e) {
		if (!isAnimating) {
			isAnimating = true;
			if (e.direction === "down") {
				goToNextSlide();
			} else {
				goToPrevSlide();
			}
		}
	}
});

function highlightNav() {
	var liItem= $('nav ul li a[href="'+currentSlide+'"]');
	$('nav ul li').removeClass('active');
	if(liItem.length) {
		liItem.parent().addClass('active');
	}
}

function goToSlide(slideHref) {
	Jump.jump('#' + slideHref, {
		duration: 1000,
		callback: function () {
			isAnimating = false;
		}
	});
	currentSlide = slideHref;
	highlightNav();
}

function goToNextSlide() {
	if ($('#' + currentSlide) && $('#' + currentSlide).next().length) {
		var nextSlideHref = $('#' + currentSlide).next().attr('id');
		goToSlide(nextSlideHref);
	} else {
		isAnimating= false;
	}
}

function goToPrevSlide() {
	if ($('#' + currentSlide) && $('#' + currentSlide).prev().length) {
		var prevSlideHref = $('#' + currentSlide).prev().attr('id');
		goToSlide(prevSlideHref);
	} else {
		isAnimating= false;
	}
}

$('nav a').click(function (e) {
	var href= $(this).attr('href');
	goToSlide(href);
	e.preventDefault();
});

$('#about a').click(function(e) {
	var href= $(this).attr('href');
	goToSlide(href);
	e.preventDefault();
});

goToSlide(currentSlide);

// });