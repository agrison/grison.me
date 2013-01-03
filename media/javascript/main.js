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
	
	if ($('#sliderContainer')) {
		var slider = new Slider($('#sliderContainer'));
		slider.setTheme('theme-dark').setTransition('transition-circles');
		slider.fetchFlickr = function(options) {
		  this.fetchJson('http://www.flickr.com/services/rest/?jsoncallback=?', $.extend({
		    method: 'flickr.photos.search',
		    per_page: 30,
		    format: 'json',
		    api_key: '11d9e3fa5c6d35efe2996541a929a813',
		    user_id: '33109968@N04' 
		  }, options), function(json){
		    return $.map(json.photos.photo, function(photo){
		      return {
		        link: 'http://www.flickr.com/photos/'+photo.owner+'/'+photo.id,
		        src: 'http://farm'+photo.farm+'.static.flickr.com/'+
		            photo.server+'/'+photo.id+'_'+photo.secret+'_z.jpg',
		        name: photo.title.substring(0,20)
		      }
		    });
		  });
		  return this;
		}
		slider.fetchFlickr();
	}
	
	// http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
	function getAge(dateString) {
	    var today = new Date();
	    var birthDate = new Date(dateString);
	    var age = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    return age;
	}
	
	if ($("#age")) {
		$("#age").html(getAge('1985-03-15'));
	}
});


