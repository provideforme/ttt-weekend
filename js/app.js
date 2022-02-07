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

const resetDiv = document.getElementById('reset-div')

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
  }
}
        
function checkWinner(){
  winningCombos.forEach((winningCombo) => {
    if(Math.abs(squares[winningCombo[0]] + squares[winningCombo[1]] + squares[winningCombo[2]]) === 3){
    winner = 1
    message = "Congratulations X, you are the champion"
    } else if(Math.abs(squares[winningCombo[0]] + squares[winningCombo[1]] + squares[winningCombo[2]]) === -3){
    winner = -1
    message = "Congratulations 0, you are the champion"
    }
    else if (turnCount === 9){
    winner = 'T'
    message = "It's a tie! Wanna play again?"
    }
  })
  }

  render()