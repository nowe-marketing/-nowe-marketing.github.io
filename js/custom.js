$(document).ready(function(){

	//Menu
	$('.nav-icon').click(function(){
		$(this).toggleClass('nav-icon-active');
		$('.menu ul').stop().slideToggle('fast');						  
	});

	//Scroll Magic
	var controller = new ScrollMagic.Controller();
	var ourScene = new ScrollMagic.Scene({
		triggerElement : '#project01',
	
		triggerHook:0.1,
	})
	.setClassToggle('body','scroll')
	.addTo(controller);
	

 //Add smooth scrolling to all links
  $(".menu ul li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

});

//WOW init
new WOW().init();