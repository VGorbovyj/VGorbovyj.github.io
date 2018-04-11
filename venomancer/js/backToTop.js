$(document).ready(function(){
		$(".backToTop").hide();
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 450) {
					$('.backToTop').fadeIn();
				} else {
					$('.backToTop').fadeOut();
				}
			});
			$('.backToTop a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 1500);
				return false;
			});
		});
	});