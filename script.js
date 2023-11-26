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


