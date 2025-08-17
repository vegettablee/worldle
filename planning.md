there needs to be a state to monitor the user's inputs, call this userInput

- needs to be a counter that if it exceeds more than 5 letters, the user's input won't increase the current amount of letters, and that there is no way for a user to go back and delete a character, say at the first index,
  characters can only be from the end, like "wordle", you can only delete e to turn "wordl" not deleting w to return
  "ordle", there needs to be validation against this

- another thing is the game state, which will include correct letters in the right place and wrong place, wrong letters
  need to be greyed out like normal, and once the user exceeds the amount of attempts they get, then we end the game like
  normal, if they get the right word, then we end the game with a winning screen(or not)

- another thing is each guess, once the user presses enter on that current guess, it freezes the state and then shows
  what parts were correct and moves on to the next guess or attempt

- for initial render, make sure that the correct word is fetched and ready, as well as the list of words that a user can
  guess from, this will be needed to be accessed quickly(likely as a set for context)

main app.js file will have :

- fetching correct words and dictionary to guess from
- initializing the game state and the board UI
- initializing the user input state, starting from the first attempt
- initializing the current attempt state, this will start at 1, and later, if it gets exceeded we end the game early, likely
  will be using an easy, win or lose state, that once changed for whatever reason, handles the changing of the game-state
