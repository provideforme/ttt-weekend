/*-------------------------------- Constants --------------------------------*/
const playerX = 1
const playerO = -1


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



/*]---------------------------- Variables (state) ----------------------------*/

let squares, turn, winner, T, turnCount    

/*------------------------ Cached Element References ------------------------*/

const allSquares = Array.from(document.querySelectorAll('.sq'))

const gameStatus = document.querySelector('#message')

const resetBtn = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/

allSquares.forEach(square => square.addEventListener('click', handleClick ))

resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/


function init(){
  squares = [
    null, null, null,
    null, null, null, 
    null, null, null,]
  message = "Let X start the game"
  turn = 1
  turnCount = 0
  winner = null
  T = 'tie'
  resetDiv.classList.add("hidden")
  render()
}

function handleClick (event) {
const index = event.target.id.replace('sq', '')
if (squares[index] !== null){
  return
}
squares[index] = turn
if (turn === 1) { 
  message = "It's O's Turn"
} else if (turn === -1) {
  message = "It's X's Turn"
}
turn *= -1 
turnCount += 1
checkWinner()
render()
resetDiv.classList.remove("hidden")
  }



function render(){
  gameStatus.textContent = message
  for (let i = 0; i < allSquares.length; i++) {
    if(squares[i] === 1){
      allSquares[i].textContent = "X";
    }
    else if(squares[i] === -1){
      allSquares[i].textContent = "O"
    } else if(squares[i] === null) {
      allSquares[i].textContent = ""
    }
  };
        
  if (winner !== null){

        } 
        
function checkWinner(){
  winningCombos.forEach(winningCombo => {
    if(Math.abs(squares[winningCombo[0]] + squares[winningCombo[1]] + squares[winningCombo[2]]) === 3){
    winner = null
    } else if (squares.every(square => square)){
    return winner === 'tie'
    }
  })
  }

  render()

    
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".

		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).

        // 3.3.2) Render a message reflecting the currrent game state:
        // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
        // Hint: Maybe use a ternary inside of a template literal here?
        // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
        // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
            // Hint (again): Maybe use a ternary inside a template literal here
      
        // 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.


