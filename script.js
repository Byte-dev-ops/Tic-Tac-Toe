console.log("Welcome to the game")

let turnX = new Audio("note-low.mp3")
let gameOver = new Audio("game-over.mp3")
let gameOverTie = new Audio("game-over-tie.mp3")

let turn = "X" 

const changeTurn = () => {
    return turnX==X?"O":"X"
}

const checkWin = () => {

}