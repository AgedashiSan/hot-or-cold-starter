
$(document).ready(function(){

	var keyWord;
	var i;
	var delta = new Array();

	function newGame(){
		keyWord = Math.floor(Math.random()*100 + 1);
		i = 0;
		delta = new Array();
		$("#count").html("0");
		$("#feedback").html("New Game Starts!");
		$("#guessList > li").remove();
	}

	newGame();

	$("form").submit(function(event){

		event.preventDefault();
		console.log("keyWord = " + keyWord);

		i++;

		var guessWord = $("#userGuess").val();
		console.log("userGuess = " + guessWord);

		$("#count").html(i);
		delta[i] = Math.abs(guessWord - keyWord);
		$("#guessList").append("<li>" + guessWord + "</li>");

		if (delta[i] == 0) {
			$("#feedback").html("Yeah you got it!!");
		}
		else if (i == 1) {
			if (delta[i] > 50) {
				$("#feedback").html("Too Cold!");
			}
			else if (delta[i] > 30) {
				$("#feedback").html("Cold!");
			}
			else if (delta[i] > 20) {
				$("#feedback").html("Warm!");
			}
			else if (delta[i] > 10) {
				$("#feedback").html("Hot!");
			}
			else {
				$("#feedback").html("Very Hot!");
			}
		}
		else {
			if (delta[i] > delta[i-1]) {
				$("#feedback").html("It's colder!");
			}
			else if (delta[i] < delta[i-1]) {
				$("#feedback").html("It's hotter!");
			}
			else if (delta[i] == delta[i-1]) {
				$("#feedback").html("Hmm it's about the same...");
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

  	$(".new").click(function(){
  		newGame();
  	});

});


