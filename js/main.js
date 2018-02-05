function openNav() {
  document.getElementsByClassName("mySidebar")[0].style.display = "block";
  document.getElementsByClassName("mySidebar")[1].style.display = "block";
	document.getElementById('button').style.display = "none";
}
function closeNav() {
  document.getElementsByClassName("mySidebar")[0].style.display = "none";
  document.getElementsByClassName("mySidebar")[1].style.display = "none";
	document.getElementById('button').style.display = "block";

}


// var typed = new Typed('#typed', {
//   strings: ["First sentence.", "Second sentence."],
//   typeSpeed: 100
// });

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
