$(function() {
	var body = $('html,body');
	$('.menu ul li:nth-child(1) a').on('click',  function() {
		body.animate({scrollTop: $('.background').offset().top}, 1000);
		return false;
	});
	$('.menu ul li:nth-child(2) a').on('click',  function() {
		body.animate({scrollTop: $('.saga-is').offset().top}, 1000);
		return false;
	});
	$('.menu ul li:nth-child(3) a').on('click',  function() {
		body.animate({scrollTop: $('.charactier').offset().top}, 1000);
		return false;
	});
	$('.menu ul li:nth-child(4) a').on('click', function() {
		body.animate({scrollTop: $('.our-word').offset().top}, 1000);
		return false;
	});
	$('.menu ul li:nth-child(5) a').on('click',  function() {
		body.animate({scrollTop: $('.bazzar').offset().top}, 1000);
		return false;
	});
	$('.menu ul li:nth-child(6) a').on('click',  function() {
		body.animate({scrollTop: $('.the-crew').offset().top}, 1000);
		return false;
	});

	$('.down').on('click',  function() {
		body.animate({scrollTop: $('.saga-is').offset().top}, 1000);
		return false;
	});


	// scroll change background menu
	var scroll_start = 0;
	var startchange = $('#home');
	var offset = startchange.offset();
	// $(document).scroll(function() {

	// });
	$(document).on('scroll', function() {
		scroll_start = $(this).scrollTop();
		if (scroll_start > offset.top) {
			$('.title').css('background-color', '#616161');
		} else {
			$('.title').css('background-color', 'transparent');
		}
	});



	//scroll active menu

});