# ReactJS Hangman
This recreates the classic *Hangman* game on ReactJS. 

# Components

## App
On load, App fetches a list of words from *https://random-word-api.herokuapp.com* and only retains words that are 5 to 13 characters in length. These words are then stored in an array. When BEGIN is clicked, one word is chosen. *stage* is set to 0. THese are then passed down to *HangedMan*, *Player* and *Computer*.

## Player
This has two parts. The first part is a panel of buttons, each with a different letter of the alphabet from A to Z. The user clicks on these to guess letters. Letters that have already been guessed are unclickable. Correct guesses will result in more letters being revealed, and possibly guessing the entire word. The second part is a text input. The user may attempt to guess the entire word by entering the word and clicking the button. In both cases, a wrong guess will increment *stage* by 1.

## Computer
This displays the chosen word, and reveals letters that have been guessed.

## HangedMan
This is a visual representation of game progress. Various parts of the hanged man are renddered in SVG, and revealed according to the value of *stage*. Once *stage* reaches 5, the entire hanged man is revealed, the game is over and the user has lost.

# Utils

## GetRandomIndex
This will return a random word from a list of words.

## RemoveIllegalCharacters
This will take a string and return that same string with only alphabetical characters, all lowercase.
