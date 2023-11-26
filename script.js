//
// for (const A of document.getElementsByClassName("A")){
//     A.addEventListener("click",(event) =>{
//        if (A!=="X"&&A!=="O")
//         event.target.textContent= "O"
//     })
// }
let winningPattern = [[0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],];

let xTurn = true;
let count = 0;
let button = document.getElementsByClassName("A")



//
// const playerX = 'X';
// const playerO = 'O';
//
// let currentPlayer = playerX;
// let gameBoard = ['', '', '', '', '', '', '', '', ''];
// let gameActive = true;
//
// function handleClick(index) {
//     if (gameBoard[index] === '' && gameActive) {
//         gameBoard[index] = currentPlayer;
//         document.getElementById('game-container').children[index].innerText = currentPlayer;
//
//         if (checkWinner()) {
//             alert(`Player ${currentPlayer} wins!`);
//             resetGame();
//         } else if (gameBoard.every(cell => cell !== '')) {
//             alert('It\'s a tie!');
//             resetGame();
//         } else {
//             currentPlayer = currentPlayer === playerX ? playerO : playerX;
//         }
//     }
// }
//
// function checkWinner() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], // 橫排
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], // 直排
//         [0, 4, 8], [2, 4, 6]             // 對角線
//     ];
//
//     return winPatterns.some(pattern => {
//         const [a, b, c] = pattern;
//         return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
//     });
// }
//
// function resetGame() {
//     currentPlayer = playerX;
//     gameBoard = ['', '', '', '', '', '', '', '', ''];
//     gameActive = true;
//
//     Array.from(document.getElementById('game-container').children).forEach(cell => {
//         cell.innerText = '';
//     });
// }


