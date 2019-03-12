var movieList = [ "HEAT", "PHILADELPHIA", "GOODFELLAS", "BRAVEHEART", "TITANIC", "FARGO" ]; // Create a list of single-word nineties movie titles for use.
var numWins = 0;
var numLosses = 0;

function gameOver() {
	alert( "You're out of words, that's game! Wins: " + numWins + " Losses: " + numLosses );
}

function wordLoss( lostWord ) {
	numLosses++;
	document.getElementById("numLosses").innerHTML = numLosses; // Refresh the displayed number of losses.
	movieList.splice( movieList.indexOf( lostWord ), 1 ); // Remove this word from the list of selectable words.
	alert( "This word, " + lostWord + ", is a loss!" );
	newWord();
}

function wordWin( wonWord ) {
	numWins++;
	document.getElementById("numWins").innerHTML = numWins; // Refresh the displayed number of wins.
	movieList.splice( movieList.indexOf( wonWord ), 1 ); // Remove this word from the list of selectable words.
	alert( "This word, " + wonWord + ", is a win!" );
	newWord();
}

function newWord() { // Primary loop. Select a new word and begin playing.

	var guessedInWordList = [];
	var guessedOutWordList = [];

	document.getElementById("guessedLetters").innerHTML = "&nbsp;"; // Reset the displayed list of guessed letters.

	if ( movieList.length > 0 ) {
		var randomMovie = movieList[Math.floor( Math.random() * movieList.length )]; // Choose a random word from the established list.
		movieList = movieList.splice( movieList.indexOf( randomMovie ), 1 ); // Remove thie random word from the list.
	} else {
		gameOver(); // The entire game is over; we're out of words.
	}

	var randomMovieLetters = randomMovie.split(""); // Turn the word into an array of letters.

	var numUserGuesses = randomMovieLetters.length + 10; // Create a limited number of user guesses.
	


	// document.write( 'Letter guesses remaining: <span id="guessesLeft">' + numUserGuesses + "</span>" ); // BUGGY



	var letterDisplayId = "";

	// Loop through the array of letters and create the letter, hidden by a blank character, in a horizontal list.
	for ( var i = 0; i < randomMovieLetters.length; i++ ) {
		letterDisplayId = "letter-" + i;
		document.getElementById("currentWord").innerHTML += '<span id="' + letterDisplayId + '">_</span>&nbsp';
	}

	// The secondary loop starts when a letter is picked (key is pressed).
	document.addEventListener("keyup", event => { // Every time a key comes up,

		var keyPressed = event.key;

		if ( numUserGuesses > 0 ) { // Check to see if the user has guesses left. If they do,

			if ( keyPressed.match(/[a-z]/i) ) { // Check to see if the key is a letter. If it is,

				keyPressed = keyPressed.toUpperCase(); // Make the letter uppercase.

				for ( var i = 0; i < randomMovieLetters.length; i++ ) { // Check to see if the letter pressed is in the random word.
					if ( keyPressed === randomMovieLetters[i] ) {
						var guessedLetterInWord = true;
					}
				}

				if ( guessedLetterInWord ) {

					if ( !guessedInWordList.includes( keyPressed ) ) { // Check to see if the letter has been revealed yet. If it hasn't,
						



						for ( var i = 0; i < randomMovieLetters.length; i++ ) { // Reveal that letter. BUGGY
							document.getElementById( "letter-" + i ).innerHTML = keyPressed;
						}




						for ( var i = 0; i < randomMovieLetters.length; i++ ) { // Check to see if all the letters have been revealed.
							if ( document.getElementById( "letter-" + i ).innerHTML === "_" ) {
								var wordGuessed = false;
							}
						}

						if ( wordGuessed ) { 
							wordWin( randomMovie ); // This word is a win, next word!
						}
					}
				
				} else { // Else, if the letter isn't in the random word,
					
					if ( !guessedOutWordList.includes( keyPressed ) ) { // Check to see if the letter has been guessed yet. If it hasn't,
						guessedOutWordList.push( keyPressed ); // Add the letter to the list of guessed letters.
						
						for ( var i = 0; i < guessedOutWordList.length; i++ ) { // Refresh the displayed list of guessed letters.



							// document.getElementById("guessedLetters").innerHTML += guessedOutWordList[i] + "&nbsp;"; // BUGGY
						

						}

						numUserGuesses--; // Decrease the number of user guesses by one.
						document.getElementById("guessesLeft").innerHTML = numUserGuesses; // Refresh the displayed number of guesses left.
					}
				}
			}

		} else { 
			wordLoss( randomMovie ); // Else, the user has used up all their guesses. This word is a loss. Next word!
		}

	});

}

newWord(); // Now that all functions are loaded, begin the game!