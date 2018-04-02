$(document).ready(function(){
    $(".anchors").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
  var navList = document.getElementById("main-navigation");
  var links = navList.getElementsByClassName("navigation-list__item");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("navigation-list__item_current-position");
      current[0].className = current[0].className.replace(" navigation-list__item_current-position", "");
      this.className += " navigation-list__item_current-position";
    });
  } 
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
       $('.navigation-list').addClass('fixed-header');
       $('header').addClass('magic-padding');
    }
    else {
       $('.navigation-list').removeClass('fixed-header');
       $('header').removeClass('magic-padding');
    }
});