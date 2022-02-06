/*-----------------------------* Instructions *------------------------------*/

// mark X when completed

// X 1) Required Variables (state of the game) 
// X    No variables need a value when defined 
	
// X 1.1) Array = squares;   
// X 1.2) Turn Variable = whose turn it is;
// X 1.3) Winner Variable = three game states:
// X (not defined) a player won; a tie; game still in play;

// 2) Cached Element References 
// X 2.1) 9 elements = squares (each square a class name)
	// 2.2) element that displays the game status

// 3) Upon loading, the app should:
	// 3.1) init();

	// 3.2) function: init() state variables: (Array, Turn Variable, Winner Variable)
		// 3.2.1) Initialize Array to 9 nulls (empty squares) 
		//        9 elements, each square: [0] = top-left square,    
		//        1] = top-middle square...[8] = bottom-right square)
		// 3.2.2) Initialize Turn to = (player 'X' = 1), (layer 	'O' = -1)
		// 3.2.3) Initialize Winner Variable = to null (no winner or tie)
		//        Winner Variable holds player value (1 or -1),
		//        if there's a winner; 'T' if there's a tie.
		// 3.2.4) render state variables, call a render function.

// 3.3) render function should:
	// 3.3.1) LOOP over board array, for each iteration:
		// 3.3.1.1) index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		// 3.3.1.2) Style square dependant on the value inside current cell being iterated over (-1, 1, or null)
	// 3.3.2) Render message on currrent game state:
		// 3.3.2.1) If winner != null (game still in progress), render whose turn it is.
			// Hint: Use ternary inside of a template literal
		// 3.3.2.2) If winner = 'T' (tie), render a tie message.
		// 3.3.2.3) Else render a congratulatory message to which player has won.
		// Hint (again): Use ternary inside a template literal 

// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.

// 4) Define the required constants:

	// 4.1) Define the 8 possible winning combinations as an array of arrays.
	  // Each array will contain three indexes of the board that make a winner if they hold the same player value. 
		// If stuck: winningCombos array in the solution code. 

// 5) Wait for click on a square, call a handleClick function
  // handleClick function will...
  // 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from square id assigned 
		// Hint: Each id corresponds with an index in our board array, 
    //       how could these be used if we cleaned them up a bit?

// 5.2) If the board has a value at the index, return because that square is already taken.

// 5.3) If winner is not null, immediately return because the game is over.

// 5.4) Update the board array at the index with the value of turn.

// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	// The getWinner function will...

	// 5.6.1) Methods to find out if there is a winner
	// 1. (more elegant) way uses winningCombos array (see: step 4)
	// 2. (simpler; more code) use winningCombos as a reference
  // Choose between 1 or 2
    
	// 5.6.1.1) Loop through the each of the winning combination arrays defined.
	// 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
	// 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
	// 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

	// 5.6.2.1) For each winning combination from step 4, find the total of each winning combination.
	// 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
	// 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

	// 5.6.3) Next, If there's no winner, check if there's a tie:
  // 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, render the state to the page (step 3.3).

// 6) Handle a player clicking the replay button:
  // 6.1) Add a replay button to the HTML document
  // 6.2) Store the new replay button element
  // 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).

/*-------------------------------- Constants --------------------------------*/
const playerX = 1
const playerO = -1


console.log(playerO)

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 6],
  [0, 4, 8],
  [6, 4, 2],
]
console.log(winningCombos)



/*]---------------------------- Variables (state) ----------------------------*/

// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined

	// 1.1) Use an array to represent the squares on the board. 
let squares, turn, winner    

	// 1.2) Use a turn variable to track whose turn it is.

	// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.

/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:

	
	// 2.1) Store the 9 elements that represent the squares on the page.
	  // You may want to give each square a class name in your HTML to make this easier!
    const allSquares = Array.from(document.querySelectorAll('.sq'))

	// 2.2) Store the element that displays the game status on the page.
    const gameStatus = document.querySelector('#message')

    const resetBtn = document.querySelector('#reset-button')
    
    console.log(allSquares)
/*----------------------------- Event Listeners -----------------------------*/
// 5) Wait for click on a square, call a handleClick function
  // handleClick function will...
  // 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from square id assigned 
		// Hint: Each id corresponds with an index in our board array, 
    //       how could these be used if we cleaned them up a bit?
allSquares.forEach(square => square.addEventListener('click', handleClick ))

/*-------------------------------- Functions --------------------------------*/


function init(){
  squares = [
    null, null, null,
    null, null, null, 
    null, null, null,]
  console.log(squares)
  
  turn = 1

  console.log(turn)
  // 3.2.3) Initialize the winner variable to null.
  // This represents that there is no winner or tie yet. 
  // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
      winner = null
  resetBtn.setAttribute("hidden", true)
	  // 3.2.4) Render those state variables to the page by calling a render function.
    render()
}

init()



// 5.3) If winner is not null, immediately return because the game is over.

function handleClick (event) {


console.log(event.target.id.replace('sq', ''))
const index = event.target.id.replace('sq', '')
if (squares[index] !== null){
  return
}
squares[index] = turn
turn *= -1
console.log(squares)
render()
  }


      
      function render(){
        for (let i = 0; i < allSquares.length; i++) {
          if(squares[i] === 1){
            allSquares[i].textContent = "X";
          }
          else if(squares[i] === -1){
            allSquares[i].textContent = "O"
          } else {
            
          }
        };
        
        // gameStatus.textContent = "It is O's turn"  
        // return gameStatus.textContent = "It is O's turn"
          // if(winner ===  1){
          //   else if (winner === "T"){
          //     gameStatus.textContent = `Uh-oh, It seems we have a draw!`
          //   }else{
          //     gameStatus.textContent = `Holy cow you did it`
          //   }
          // } 
        }


        function checkWinner(){
        
        }
        // 3.3.2) Render a message reflecting the currrent game state:
        // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
        // Hint: Maybe use a ternary inside of a template literal here?
        // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
        // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
            // Hint (again): Maybe use a ternary inside a template literal here
      
        // 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.


