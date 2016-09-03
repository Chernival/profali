$(document).ready(function(){


	//wow.js on scroll animations initialization
	var wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 50
		}
	);
	wow.init();

	//parallax effect initialization
	$('.imgAbout').parallax("50%", 0.3);
	$('.imgHead').parallax("50%", 0.3);


	//Nice scroll initialization
	$("html").niceScroll({
		scrollspeed: 50,
		autohidemode : false,
		cursorwidth : 8,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#0f3f53',
		zindex : 999
	});










});