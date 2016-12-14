

var testBtn = document.getElementById('test-btn');

testBtn.addEventListener('click', executeCode);


function executeCode(){

	// alert('test');
	var aboutDiv = document.getElementById('about');

	aboutDiv.setAttribute('style', 'visibility: hidden');

}