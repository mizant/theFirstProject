var windowHeight = $(window).height();

$(window).ready(function() {
	var self = $(".text"),
	height = self.offset().top + self.height();
	if ($(document).scrollTop() + windowHeight >= height) {
		$(".text").addClass("text_active")
	};
$('.header__burger, .header__burger:before, .header__burger:after').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
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

		
	});
	})
});
 