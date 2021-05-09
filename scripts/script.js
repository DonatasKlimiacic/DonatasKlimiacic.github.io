
// Subscription popUp///////////////////////////////////////
var button = document.getElementById('sub-button');

	button.addEventListener("click", function(event) {   
		
		event.preventDefault();
		popUp("open");

	} );


var button1 = document.getElementById('submit-btn');

	button1.addEventListener("click", function(event) {   
		
		event.preventDefault();//kad nepersikrauti puslapis paspaudus submit
		popUp("close");

	} );	


var buttonClose = document.getElementById('pop-up-close');

buttonClose.addEventListener("click", function(event) { 

		event.preventDefault();
		popUp("close");

	} );



function popUp(action) {
	var popUp = document.querySelector(".pop-up");

	if (action == "open") {
		popUp.classList.add("active");
	}
	else if (action == "close") {
		popUp.classList.remove("active");
	}

}


//Back to top button/////////////////////////////////////////
var toTopBtn = document.querySelector('#to-top-button');

window.addEventListener("scroll", scrollFunction);

/*funkcija ziuri kiek nuskrolinta vertikaliai pixeliais*/
/*pageYOffset grazina distance from the top*/
function scrollFunction() {
	if (window.pageYOffset > 280) {
		toTopBtn.style.display = "block";
	}
	else {
		toTopBtn.style.display = "none";
	}
};


toTopBtn.addEventListener("click",function toTop (){

	// window.scrollTo(0,0);  puslapio virsus
	// behavior: 'smooth'
	window.scroll({
	  top: 0, 
	  left: 0, 
	  behavior: 'smooth'
	});

});



//Hamburger/////////////////////////////////////////////////////
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');

burger.addEventListener("click", function(event) {   
		
		event.preventDefault();
		menu.classList.toggle("menu-active");
		burger.classList.toggle("rotated");
	} );



//Perkelimai i tam tikra section/////////////////////////////////
var menuLinks = document.querySelectorAll("a.scrollable");

for (var i = 0; i < menuLinks.length; i++) {
  
  menuLinks[i].addEventListener("click", function(event) {
    
    event.preventDefault();
    
    var section = document.querySelector(this.getAttribute("href"));
    
    window.scroll({
      top: section.offsetTop, 
      left: 0, 
      behavior: 'smooth'
    });
    
  });
};
