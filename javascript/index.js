console.log("hello there");

$(function() {
	//caches a jQuery object containing the header element
	var header = $('#nav');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= header.height()) {
			header.fadeOut();
		} else {
			header.fadeIn();
		}
	});
});
