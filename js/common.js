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
$(document).ready(function(){
	$(".to-the-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 450) {
				$('.to-the-top').fadeIn();
			} else {
				$('.to-the-top').fadeOut();
			}
		});
		$('.to-the-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200);
			return false;
		});
	});
});