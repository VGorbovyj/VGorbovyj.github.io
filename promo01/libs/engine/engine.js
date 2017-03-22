$('.menu-icon').on('click', function() {
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