$(document).ready(function(){
	$(".anchors").on("click","a", function (event) {

		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(){
 $('.openReview').click(function(){
  $(this).parent().children('div.fullReview').toggle('normal');
  $(this).parent().children('div.miniReview').toggleClass('hide');
  return false;
 });
});

$(document).ready(function(){
	$(".toTheTop").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 450) {
				$('.toTheTop').fadeIn();
			} else {
				$('.toTheTop').fadeOut();
			}
		});
		$('.toTheTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200);
			return false;
		});
	});
});

