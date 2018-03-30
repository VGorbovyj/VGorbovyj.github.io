$(document).ready(function(){

    var nav_wrap = $(".navigation-list"),
        elem_width,
        elem_left_offset,
        elem_parent,
        slider_line;
    
    $(window).load(function(){

        nav_wrap.each(function(){
            $(this).append('<li class="navigation-list__item navigation-list__item_magic-line"></li>');

            var start_elem_width = 0;
            var start_elem_offset = 0;
            var active_elem = $(this).find(".navigation-list__item_current-position");

            if(active_elem.length){
                start_elem_width = active_elem.outerWidth();
                start_elem_offset = active_elem.position().left;
            } 

            $(this).find(".navigation-list__item_magic-line").css({
                "width": start_elem_width + "px",
                "left": start_elem_offset + "px"
            })
            .data("width", start_elem_width)
            .data("left", start_elem_offset);
        });

    });

    nav_wrap.find(".navigation-list__item a").hover(function(){

        elem_parent = $(this).parent();
        elem_width = elem_parent.outerWidth();
        elem_left_offset = $(this).position().left;
        slider_line = elem_parent.siblings(".navigation-list__item_magic-line");
        slider_line.stop().animate({
            "width": elem_width + "px",
            "left": elem_left_offset + "px"
        });

    }, function(){

        slider_line.stop().animate({
            "width": slider_line.data("width") + "px",
            "left": slider_line.data("left") + "px"
        });
          
    });

});