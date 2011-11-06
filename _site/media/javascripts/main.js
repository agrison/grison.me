$(function() {
	var social = $('#social');
	social.fadeOut(10);
	
	$('a.lsocial').click(function() {
		if (social.is(':visible')) {
			social.fadeOut('slow');		
		} else {
			social.fadeIn('slow');
		}
	});
});


