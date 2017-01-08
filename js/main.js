
	// Functionality for hamburger menu

var hamburger = document.getElementById('hamburger');

// hamburger.addEventListener("click", function(){alert('test'); });

hamburger.addEventListener("click", openMenu);


	// variables for menu use
	var header = document.getElementById('main');
	var menuState = "";

function openMenu(){
	

	// header.style.height = "500px"

	// alert('test');
	// console.log();

	

	if ((menuState == "") || (menuState == "closed")){
		menuState = "open";
		header.style.height = "500px";

	}
	else {
		// alert('test');
		menuState = "closed";
		header.style.height = "100px";
	}


}

// var testBtn = document.getElementById('test-btn');

// testBtn.addEventListener('click', executeCode);


// function executeCode(){

// 	// alert('test');
// 	var aboutDiv = document.getElementById('about');

// 	aboutDiv.setAttribute('style', 'visibility: hidden');

// }