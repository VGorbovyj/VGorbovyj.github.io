$(document).ready(function(){
	$(".to-the-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 450) {
				$('.to-the-top').fadeIn();
			} else {
				$('.to-the-top').fadeOut();
			}
		});
		$('.to-the-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200);
			return false;
		});
	});
});
