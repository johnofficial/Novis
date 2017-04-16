$( document ).ready(function() {

clientStuff();
mobileMenu();
activePage();
nextInterval;
});

function clientStuff(){





		$('.testimonial-section span').click(function(){
			var $this 		= $(this),
				$siblings	= $this.parent().children(),
				position 	= $siblings.index($this);
				spanNum 		= $('.testimonial-section span').length;
			clearInterval(nextInterval);

			$('.testimonial-unit').removeClass('active-unit').eq(position-1).addClass('active-unit');
			$siblings.removeClass('active-unit');
			$this.addClass('active-unit');
		});



		$('.next, .prev').click(function(){
		var $this 			= $(this),
			curActiveClient = $('.testimonial-wrap').find('.active-unit'),
			position		= $('.testimonial-wrap').children().index(curActiveClient),
			clientNum 		= $('.testimonial-unit').length;

			clearInterval(nextInterval);
			if($this.hasClass('next')){
				if(position < clientNum -1){
					$('.active-unit').removeClass('active-unit').next().addClass('active-unit');
				}else{
					$('.testimonial-unit').removeClass('active-unit').first().addClass('active-unit');
				}
			}else{
				if(position === 0){
					$('.testimonial-unit').removeClass('active-unit').last().addClass('active-unit');
				}else{
					$('.active-unit').removeClass('active-unit').prev().addClass('active-unit');
				}
			}
	});
}

var nextInterval = setInterval( function(){

		var $this 			= $(this),
				curActiveClient = $('.testimonial-wrap').find('.active-unit'),
				position		= $('.testimonial-wrap').children().index(curActiveClient),
				clientNum 		= $('.testimonial-unit').length;
		if(position < clientNum -1){
						$('.active-unit').removeClass('active-unit').next().addClass('active-unit');
					}else{
						$('.testimonial-unit').removeClass('active-unit').first().addClass('active-unit');
						$('.mobile-controls').removeClass('active-unit').first().addClass('active-unit');
					}
		}, 7000);


function mobileMenu(){
  $(".mobile-nav-toggle").on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){
      $(".mobile-nav-toggle, .mobile-header").removeClass("is-open");
    }else{
      $(".mobile-nav-toggle, .mobile-header").addClass("is-open");
    }
});
}

function activePage() {
    var path = location.pathname;

    $(".menu-items a ").each(function() {
        var href = $(this).attr('href');
        if ('..' + path == (href +'/')) {
            $(this).addClass('active');
        }else if(path == '/'){
        	$('.menu-items a:first-child').addClass('active');
        }
    });
}