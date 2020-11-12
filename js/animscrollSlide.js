const animItems = document.querySelectorAll('.features-left, .features-right, .iphone-image, .map-img');
let animText = document.querySelectorAll('div.text');

const button_individual = document.querySelectorAll('.button_individual');



if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem=animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight/animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {

				if (animItem.classList.contains('map-img')) {
				animItem.classList.add('map-img_active');
			}

				else if (animItem.classList.contains('features-left')) {
				animItem.classList.add('features_active');
			} 

			else if (animItem.classList.contains('features-right')) {
				animItem.classList.add('features_active');
			} 

			} else if (animItem.classList.contains('iphone-image')) {
				animItem.classList.add('image_active');

			} else if (animItem.classList.contains('text')) {
				animItem.classList.add('text_active');

			} 
			else if (!animItem.classList.contains('_anim-no-hide')) {
					
				animItem.classList.remove('text_active');
				}
			}
		}

	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}


var windowHeight = $(window).height();

$(document).ready( function() {
  $(".text").addClass("text_active");
  $('.button').addClass('button_active');
} );

$(window).ready(function() {
	
	$('.header__burger, .header__burger:before, .header__burger:after, .menu-close').click(function(event){
		$('.header__burger, .header__menu, .slide_out_menu, .menu-close, .footer-left-links').toggleClass('active');
	/*	$('.menu-close').click(function(event){
		$('.header__burger, .header__menu, .slide_out_menu').toggleClass('active');*/
	
	});







	const navOffset = $ ('#nav').offset().top;
	$(window).scroll(function() {
		const scrolled = $(this).scrollTop();
		if (scrolled > navOffset) {
			$('#wrapper').addClass('nav-fixed');
			$('#wrapper').animate({
      			height: "33px"},{ duration: 500, queue: false });
			$(".header__burger").addClass("burger_active");
		} 
		else if (scrolled < navOffset) {
			$('#wrapper').removeClass('nav-fixed');
			$('#wrapper').animate({
     		 	height: "100px"},{ duration: 500, queue: false });
			$(".header__burger").removeClass("burger_active");
		}

	})

});