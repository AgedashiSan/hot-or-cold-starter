
$(document).ready(function(){

	var keyWord = Math.floor(Math.random()*100 + 1);
	var i = 0;
	var delta = new Array();

	$("#guessButton").click(function(){
		i = i++;
		var guessWord = document.getElementById("userGuess").value;
		document.getElementById("count").innerHTML = i;
		delta[i] = Math.abs(guessWord - keyWord);
		$("#guessList").append("<li>" + guessWord + "</li>");
		if (delta[i] == 0) {
			document.getElementById("feedback").innerHTML = "Yeah you got it!!";
		}
		else if (i == 1) {
			if (delta[i] > 50) {
				document.getElementById("feedback").innerHTML = "Too Cold!";
			}
			else if (delta[i] > 30) {
				document.getElementById("feedback").innerHTML = "Cold!";
			}
			else if (delta[i] > 20) {
				document.getElementById("feedback").innerHTML = "Warm!";
			}
			else if (delta[i] > 10) {
				document.getElementById("feedback").innerHTML = "Hot!";
			}
			else {
				document.getElementById("feedback").innerHTML = "Very Hot!";
			}
		}
		else {
			if (delta[i] > delta[i-1]) {
				document.getElementById("feedback").innerHTML = "It's colder!";
			}
			else if (delta[i] < delta[i-1]) {
				document.getElementById("feedback").innerHTML = "It's hotter!";
			}
			else {
				document.getElementById("feedback").innerHTML = "Hmm it's about the same...";
			}
		}
	});
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


