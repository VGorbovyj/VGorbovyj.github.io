$(document).ready(function(){
	// Basic selectors
	//$('p.lead').css('border', '4px solid red');

	// Basic animations
	//$('.box:first').hide(500).delay(300).show(800);
	//$('.box:last').fadeOut(500).slideDown(800);
	//$('.box:first').animate({height: '200px', left: '200px', }, 800);

	// Idex filters
	//$('p:eq(2)').css('border', '4px solid red');

	// Relationships
	//$('h2:has(span)').css('border', '4px solid red');
	//$('h2:empty').css('border', '4px solid red');

	// Attribute fiters
	//$('p[name^="sho"').css('border', '4px solid red'); // вибирає всі, в яких є такі символи
	//$('p[name$="sho"').css('border', '4px solid red'); // вибирає всі, які мають такі закінчення
});

$(function(){
	//Atir method
	//$('p:first').attr('class', 'not-gooo'); // додавання класу, його заміна

	//Image swap
	//$('img.change').attr('src', 'css/img/2.jpg');
	//$('img.change').delay(400).fadeOut(400, function(){
		//$(this).attr('src', 'css/img/2.jpg').fadeIn(300);
	//});

	// Class methods
	//$('p:last').addClass('blue').removeClass('gooo');

	//$('p').toggleClass('blue').removeClass('gooo');

	//$('p.gooo').on('click',function(){
	    //$('.lead').toggleClass('blue');
	//});

	// Content methods
	//$('p:first').text("Hey yoooooo");
	//$('p:first').html('heyy there <em> buddy </em>'); // щоб включати теги
	//$('input').val('yo dude!');

	// DOM traversal
	//$('h2').children().css('border', '4px solid red'); // дасть стилю всьому, що знаходиться в h2
	//$('h2').children().css('border', '4px solid red'); // дасть стилю всьому, що знаходиться в h2

	//$('h2').parents('section').siblings('header').children('p').css('border', '4px solid red');

	// EVENT binding

	//$('h2').click(function(){
		///$(this).toggleClass('blue');
	//});
	//$('h2').hover(function(){
		//$(this).toggleClass('blue');
	//});
});