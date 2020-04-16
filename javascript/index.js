document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    $(function() {
    	//caches a jQuery object containing the header element
    	const navbar = $('#navbar-id');
      let oNav = document.getElementById("navbar-id")
    	$(window).scroll(function() {
    		let scroll = $(window).scrollTop();
    		if (scroll >= navbar.height()) {
    			navbar.fadeOut("slow");
    		} else {
    			navbar.fadeIn("slow");
    		}
    	});
    });

  });
