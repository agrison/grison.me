---
layout: ego
title: grison.me - Ego
---
Ego
==============

Welcome to my personal website !

My name is Alexandre aka Alex, I'm an Analyst Developer working in <a href="http://maps.google.com/maps?q=Luxembourg+Ville,+Luxembourg&hl=fr&ll=49.61071,6.152344&spn=8.302158,19.665527&sll=37.0625,-95.677068&sspn=40.460237,78.662109&vpsrc=6&hnear=Luxembourg&t=m&z=6">Luxembourg</a> and living in <a href="http://maps.google.fr/maps?q=Metz&hl=fr&ll=49.124219,6.174316&spn=8.384434,19.665527&sll=46.75984,1.738281&sspn=8.776296,19.665527&vpsrc=6&hnear=Metz,+Moselle,+Lorraine&t=m&z=6">Metz</a>, a beautiful city in the northeast of France.

Up to now, I've accumulated a few passions:


## IT
I've made it my job, I like it a lot. Coding, Agile and other hype buzzwords that looks good on CV. I'm into almost everything IT, but my primary passion is, and I think will stay development. Mainly Java, Spring and whatever emerge in the Java ecosystem; but as I said, I'm into everything, and thus I like other stacks and languages like Python, C++, "cocorico's" Objective Caml, whatever is buzzing at the moment, and so on.


## Sport
Like a lot of people, I do like sport, many of them of course, but mainly:

* Badminton
* Football
* Running


## Photography
With my Canon EOS 450D and a few lenses (EF-S 18-55mm f/3.5-5.6 IS II, EF-S 55-250mm f/4-5.6 IS II and EF 50mm f/1.8 II) I try to capture all I can as well as possible.
I sometimes post some photos on my flickr account:
<div id="sliderContainer" style="margin-left: 150px;"></div>


## Social
Like everybody nowadays, I've got a [facebook](http://facebook.com/alexandre.grison) page, a [twitter](http://twitter.com/algrison) account, a [flickr](http://www.flickr.com/photos/agrison/) one, a [linkedin](http://www.linkedin.com) page and a [github](http://github.com/agrison) repository.


## The rest
I'm loving so much things (including music, cinema, tv shows, reading, ...) that I won't take the time to describe them all here, maybe you'll learn about it while visiting.


<script type="text/javascript">
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
</script>

