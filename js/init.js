/* global $ */
// $(document).ready(function() {

	var Jump= new Jump();

	$('nav a').click(function(e) {

		Jump.jump($(this).attr('href'), {
			duration: 1000,
		});
		e.preventDefault();
	});

// });