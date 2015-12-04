(function($){
  $(function(){

    $(".nav-link").click(function(e) {

		var $targetDiv = $($(this).attr('href'));
		$targetDiv.velocity("scroll", 1000).velocity({ opacity: 1 });

		$(this).parent().addClass('active').siblings().removeClass('active');

		return false;
	});

	$('.slider').slider({full_width: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space