// Function to open navigation and hide button
function openNav() {
	var mySideBar = document.getElementsByClassName("mySidebar");
	for(i=0; i<mySideBar.length; i++){
		document.getElementsByClassName("mySidebar")[i].style.display = "block";
	}
	document.getElementById('button').style.display = "none";
}

// Function to close navigation and show button
function closeNav() {
	var mySideBar = document.getElementsByClassName("mySidebar");
	for(i=0; i<mySideBar.length; i++){
		document.getElementsByClassName("mySidebar")[i].style.display = "none";
	}
	document.getElementById('button').style.display = "block";
}


// Function Typed.js by Matt Boldt
// https://mattboldt.com/demos/typed-js/

$(function(){
	$("#typed").typed({
		strings: ["Développeur Web.", "Formateur Développeur Web."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 100,
		// time before typing starts
		startDelay: 700,
		// backspacing speed
		backSpeed: 30,
		// time before backspacing
		backDelay: 1500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
	});
});





// jQuery Function
// https://startbootstrap.com/template-overviews/freelancer/

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 110) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });


})(jQuery); // End of use strict
