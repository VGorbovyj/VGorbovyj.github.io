$(document).ready(function(){
	$(".anchors").on("click","a", function (event) {

		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$('.menu-icon').on('click',function(){
    $('nav').toggleClass('main-nav');
    $('.menu-icon').toggleClass('menu-magic');
});
$(document).ready(function(){
	$(".menu-list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
});



$(document).ready(function(){
 $('.openReview').click(function(){
  $(this).parent().children('div.fullReview').toggle('normal');
  return false;
 });
});