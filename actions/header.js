import $ from 'jquery';

$(window).on('scroll', function () {
	let headerHeight = $('header').height() / 2;

	if(headerHeight <= $(this).scrollTop()){
		$('header').css('position', 'fixed');
		$('header').css('top', headerHeight*-1);
	}else{
		$('header').css('position', 'unset');
	}
});