$(document).ready(function() {
	$('.skill-block').addClass("hidden-block").viewportChecker({
		classToAdd: 'visible-block animated bounceIn', offset: 200
	});
});
$(document).ready(function(){
	$(".main-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
});
$(document).ready(function(){
	$(".up-btn").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 550) {
				$('.up-btn').fadeIn();
			} else {
				$('.up-btn').fadeOut();
			}
		});
		$('.up-btn a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	});
});