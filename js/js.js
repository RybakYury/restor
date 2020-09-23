$(document).ready(function(){
	$("#scroll").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1900 мс
		$('body,html').animate({scrollTop: top}, 1900);
	});
});

$(function(){
	
	$('.menuBurger').on('click', function(){
		
		$('.menu__list').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}
		
	});
	
 });
	
});

$(document).ready(function(){
	$('.nav_footer-first').click(function(event){
		
		if($('.nav_footer-all').hasClass('one')){
			$('.nav_footer-first').not($(this)).removeClass('active');
			$('.nav_footer-text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});