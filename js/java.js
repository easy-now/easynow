function myFunction() {
	var videoOne = document.getElementByClassName(".vid1");
	var videoTwo = document.getElementByClassName(".vid2");
	var listOne = document.getElementByClassName(".listOne");
	var listTwo = document.getElementByClassName(".listTwo");
	
	function vidOne(){
		var video = document.getElementByClassName(".vid1");
		var videoTwo = document.getElementByClassName(".vid2");
		video.play();
		videoTwo.pause();
		
	}
};