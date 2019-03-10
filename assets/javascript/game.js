var movieList = [ "HEAT", "PHILADELPHIA", "GOODFELLAS", "BRAVEHEART", "TITANIC", "FARGO" ]; // Create a list of single-word nineties movie titles for use.

function gameOver() {

}

function wordLoss() {

}

function wordWin() {

}

function newWord() { // BEGIN PRIMARY LOOP: SELECT A NEW WORD AND BEGIN PLAYING.

	var guessedInWordList = [];
	var guessedOutWordList = [];

	// Reset the displayed list of guessed letters.

	if ( movieList.length > 0 ) {
		var randomMovie = movieList[Math.floor( Math.random() * movieList.length )]; // Choose a random word from the established list.
		movieList = movieList.splice( movieList.indexOf( randomMovie ), 1 ); // Remove thie random word from the list.
	} else {
		gameOver(); // The entire game is over; we're out of words.
	}


	var randomMovieLetters = randomMovie.split("");

	var numUserGuesses = randomMovieLetters.length + 10; // Create a limited number of user guesses and display them to the screen.
	document.write( "Letter guesses remaining: " + numUserGuesses );

	var letterDisplayId = "";


	// Loop through the array and create the letter, hidden by a blank character, in a horizontal list.
	for ( var i = 0; i < randomMovieLetters.length; i++ ) {

		letterDisplayId = "letter-" + i;

		document.getElementById("currentWord").innerHTML += '<span id="' + letterDisplayId + '">_</span>&nbsp';

	}

	// The secondary loop starts when a letter is picked (key is pressed).
	document.addEventListener("keyup", event => { // Every time a key comes up,

		var keyPressed = event.key;

		if ( numUserGuesses > 0 ) {// Check to see if the user has guesses left. If they do,

			if ( keyPressed.match(/[a-z]/i) ) { // Check to see if the key is a letter. If it is,

				keyPressed = keyPressed.toUpperCase(); // Make the letter uppercase.

				for ( var i = 0; i < randomMovieLetters.length; i++ ) { // Check to see if the letter pressed is in the random word.
					if ( keyPressed === randomMovieLetters[i] ) {
						var guessedLetterInWord = true;
					}
				}

				if ( guessedLetterInWord ) {
					if (  ) { // Check to see if the letter has been revealed yet. If it hasn't,
						
						// Reveal that letter.
						
						if (  ) { // Check to see if all the letters have been revealed. If they have,
							wordWin(); // This word is a win!
						}

					} // Else if it has, nothing happens.
				
				} else { //Else, if the letter isn't in the random word,
					
					if (  ) { // Check to see if the letter has been guessed yet. If it hasn't,
						// Add the letter to the list of guessed letters.
						// Display the letter on the guessed letters list.
						// Decrease the number of user guesses by one.
					} // Else, if the letter has been guessed nothing happens.
				
				}

			} // Else, if the key pressed isn't a letter, nothing happens.

		} else { 
			wordLoss(); // Else, the user has used up all their guesses. This word is a loss. Next word!
		}

	});


}