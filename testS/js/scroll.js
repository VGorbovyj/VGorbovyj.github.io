$(document).ready(function(){
		$(".menu-scroll").on("click","a", function (event) {
				event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

jQuery(function(f){
    var element = f('#top-magic');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](700);           
    });
});
$('.menu-icon').on('click',function(){
    $('.mobile-menu-nav').toggleClass('main-nav');
    $('.menu-icon').toggleClass('menu-magic');
});

