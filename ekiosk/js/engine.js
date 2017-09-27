//--ВЕЛИКИЙ СЛАЙДЕР НА ГОЛОВНІЙ
(function() {
  var sliderContent, sliderIndex, sliderLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;

  sliderContent = $(".slider__box");

  sliderIndex = 0;

  sliderLength = sliderContent.children().length;

  isAnimating = false;

  itemWidth = 100 / sliderLength;

  firstItem = $(sliderContent.children()[0]);

  lastItem = $(sliderContent.children()[sliderLength - 1]);

  firstClone = null;

  lastClone = null;

  sliderContent.css("width", sliderLength * 100 + "%");

  sliderContent.transition({
    x: (sliderIndex * -itemWidth) + "%"
  }, 0);

  $.each(sliderContent.children(), function() {
    return $(this).css("width", itemWidth + "%");
  });

  $(".nav__left").on("click", function() {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    sliderIndex--;
    if (sliderIndex === -1) {
      lastItem.prependTo(sliderContent);
      sliderContent.transition({
        x: ((sliderIndex + 2) * -itemWidth) + "%"
      }, 0);
      return sliderContent.transition({
        x: ((sliderIndex + 1) * -itemWidth) + "%"
      }, 1000, "easeInOutExpo", function() {
        sliderIndex = sliderLength - 1;
        lastItem.appendTo(sliderContent);
        sliderContent.transition({
          x: (sliderIndex * -itemWidth) + "%"
        }, 0);
        return isAnimating = false;
      });
    } else {
      return sliderContent.transition({
        x: (sliderIndex * -itemWidth) + "%"
      }, 650, "easeInOutExpo", function() {
        return isAnimating = false;
      });
    }
  });

  $(".nav__right").on("click", function() {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    sliderIndex++;
    return sliderContent.transition({
      x: (sliderIndex * -itemWidth) + "%"
    }, 650, "easeInOutExpo", function() {
      isAnimating = false;
      if (firstClone) {
        sliderIndex = 0;
        sliderContent.transition({
          x: (sliderIndex * -itemWidth) + "%"
        }, 0);
        firstClone.remove();
        firstClone = null;
        sliderLength = sliderContent.children().length;
        itemWidth = 100 / sliderLength;
        sliderContent.css("width", sliderLength * 100 + "%");
        $.each(sliderContent.children(), function() {
          return $(this).css("width", itemWidth + "%");
        });
        return;
      }
      if (sliderIndex === sliderLength - 1) {
        sliderLength++;
        itemWidth = 100 / sliderLength;
        firstClone = firstItem.clone();
        firstClone.addClass("clone");
        firstClone.appendTo(sliderContent);
        sliderContent.css("width", sliderLength * 100 + "%");
        $.each(sliderContent.children(), function() {
          return $(this).css("width", itemWidth + "%");
        });
        return sliderContent.transition({
          x: (sliderIndex * -itemWidth) + "%"
        }, 0);
      }
    });
  });

})
.call(this);
//--ВЕЛИКИЙ СЛАЙДЕР НА ГОЛОВНІЙ--//


//--СЛАЙДЕР БЛОКУ ТОВАРІВ
(function() {
  var sliderContent, sliderIndex, sliderLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;

  sliderContent = $(".slider__content");

  sliderIndex = 0;

  sliderLength = sliderContent.children().length;

  isAnimating = false;

  itemWidth = 100 / sliderLength;

  firstItem = $(sliderContent.children()[0]);

  lastItem = $(sliderContent.children()[sliderLength - 1]);

  firstClone = null;

  lastClone = null;

  sliderContent.css("width", sliderLength * 100 + "%");

  sliderContent.transition({
    x: (sliderIndex * -itemWidth) + "%"
  }, 0);

  $.each(sliderContent.children(), function() {
    return $(this).css("width", itemWidth + "%");
  });

  $(".nav__left").on("click", function() {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    sliderIndex--;
    if (sliderIndex === -1) {
      lastItem.prependTo(sliderContent);
      sliderContent.transition({
        x: ((sliderIndex + 2) * -itemWidth) + "%"
      }, 0);
      return sliderContent.transition({
        x: ((sliderIndex + 1) * -itemWidth) + "%"
      }, 1000, "easeInOutExpo", function() {
        sliderIndex = sliderLength - 1;
        lastItem.appendTo(sliderContent);
        sliderContent.transition({
          x: (sliderIndex * -itemWidth) + "%"
        }, 0);
        return isAnimating = false;
      });
    } else {
      return sliderContent.transition({
        x: (sliderIndex * -itemWidth) + "%"
      }, 650, "easeInOutExpo", function() {
        return isAnimating = false;
      });
    }
  });

  $(".nav__right").on("click", function() {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    sliderIndex++;
    return sliderContent.transition({
      x: (sliderIndex * -itemWidth) + "%"
    }, 650, "easeInOutExpo", function() {
    isAnimating = false;
    if (firstClone) {
      sliderIndex = 0;
      sliderContent.transition({
        x: (sliderIndex * -itemWidth) + "%"
      }, 0);
      firstClone.remove();
      firstClone = null;
      sliderLength = sliderContent.children().length;
      itemWidth = 100 / sliderLength;
      sliderContent.css("width", sliderLength * 100 + "%");
      $.each(sliderContent.children(), function() {
        return $(this).css("width", itemWidth + "%");
      });
      return;
    }
    if (sliderIndex === sliderLength - 1) {
      sliderLength++;
      itemWidth = 100 / sliderLength;
      firstClone = firstItem.clone();
      firstClone.addClass("clone");
      firstClone.appendTo(sliderContent);
      sliderContent.css("width", sliderLength * 100 + "%");
      $.each(sliderContent.children(), function() {
        return $(this).css("width", itemWidth + "%");
      });
      return sliderContent.transition({
        x: (sliderIndex * -itemWidth) + "%"
      }, 0);
    }
  });
});

}).call(this);
//--СЛАЙДЕР БЛОКУ ТОВАРІВ--//


//--ТАБИ ГРУП ПРОДАЖУ
$('.tab_1_leb').on('click',function(){
  $('.tab_1_leb').addClass('active');
  $('.tab_2_leb').removeClass('active');
  $('.tab_3_leb').removeClass('active');
  $('.tab_1_con').addClass('selected');
  $('.tab_2_con').removeClass('selected');
  $('.tab_3_con').removeClass('selected');
});
$('.tab_2_leb').on('click',function(){
  $('.tab_2_leb').addClass('active');
  $('.tab_1_leb').removeClass('active');
  $('.tab_3_leb').removeClass('active');
  $('.tab_2_con').addClass('selected');
  $('.tab_1_con').removeClass('selected');
  $('.tab_3_con').removeClass('selected');
});
$('.tab_3_leb').on('click',function(){
  $('.tab_3_leb').addClass('active');
  $('.tab_1_leb').removeClass('active');
  $('.tab_2_leb').removeClass('active');
  $('.tab_3_con').addClass('selected');
  $('.tab_1_con').removeClass('selected');
  $('.tab_2_con').removeClass('selected');
});
//--ТАБИ ГРУП ПРОДАЖУ--//


//--МОДАЛЬНІ ВІКНА НА ГОЛОВНІЙ--
var modal = document.getElementById('subscribe');
var modal_2 = document.getElementById('newsletter');
var btn = document.getElementById("subscribeButton");
var span = document.getElementsByClassName("close")[0];
var confirm = document.getElementsByClassName("confirm")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal_2.style.display = "none";
}
confirm.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//--МОДАЛЬНІ ВІКНА НА ГОЛОВНІЙ--//


//--ПОВНОЕКРАННИЙ ПЕРЕГЛЯД ДЛЯ ТОВАРУ
function fullSize() {
  document.getElementById('fullImage').style.display = "block";
}
function normalSize() {
  document.getElementById('fullImage').style.display = "none";
}
//--ПОВНОЕКРАННИЙ ПЕРЕГЛЯД ДЛЯ ТОВАРУ--//

//--ПОЯВА І ПРИХОВАННЯ МЕНЮ
function showNavi() {
    var x = document.getElementById('mainMenu__megaMenu');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        x.style.position = 'absolute';
    } else {
        x.style.display = 'none';
    }
} 
//--ПОЯВА І ПРИХОВАННЯ МЕНЮ--//

//--ТАБИ СТОРІНКИ ПЕРЕГЛЯДУ ТОВАРУ
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//--ТАБИ СТОРІНКИ ПЕРЕГЛЯДУ ТОВАРУ--//