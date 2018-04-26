// STEP 5 OF THE PROJECT

g = new Game(3, 3, 3);
g.playMove(2, 1)


// THIS WAS STEP 4 OF THE PROJECT

// const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
//   let board = [];
//   for (let i = 0; i < numberOfRows; i++) {
//     let row = [];
//     for (let j = 0; j < numberOfColumns; j++) {
//       row.push(' ');
//     }
//     board.push(row);
//   }
//   return board;
//
// }
//
// const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
//   let board = [];
//   for (let i = 0; i < numberOfRows; i++) {
//     let row = [];
//     for (let j = 0; j < numberOfColumns; j++) {
//       row.push(null);
//     }
//     board.push(row);
//   }
//
//   let numberOfBombsPlaced = 0;
//   while (numberOfBombsPlaced < numberOfBombs) {
//     // need to make sure not putting bombs on top of other bombs
//     let randomRowIndex = Math.floor(Math.random() * numberOfRows);
//     let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
//
//     if (board[randomRowIndex][randomColumnIndex] !== 'B') {
//       board[randomRowIndex][randomColumnIndex] = 'B';
//       numberOfBombsPlaced++;
//     }
//   }
//   return board;
// }
// //4, 4
// const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
//   let neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
//   let numberOfRows = bombBoard.length;
//   let numberOfColumns = bombBoard[0].length;
//   let numberOfBombs = 0;
//
//   neighborOffsets.forEach((offset) => {
//     const neighborRowIndex = rowIndex + offset[0];
//     //1. 4 + -1 = 3 valid
//     //2. 4 + -1 = 3 valid
//     //3. 4 + -1 = 3 valid
//     //4. 4 + 0 = 4 valid
//     //5. 4 + 0 = 4 valid
//     //6. 4 + 1 = 5 not valid
//     //7. 4 + 1 = 5 not valid
//     //8. 4 + 1 = 5 not valid
//     const neighborColumnIndex = columnIndex + offset[1];
//     //1. 4 + -1 = 3 valid
//     //2. 4 + 0 = 4 valid
//     //3. 4 + 1 = 5 not valid
//     //4. 4 + -1 = 3 valid
//     //5. 4 + 1 = 5 not valid
//     //6. 4 + -1 = 3 valid
//     //7. 4 + 0 = 4 valid
//     //8. 4 + 1 = 5 not valid
//     if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
//       console.log("valid board tile")
//       if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
//         numberOfBombs++;
//       }
//     }
//   })
//   return numberOfBombs;
// }
//
// const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
//   if (playerBoard[rowIndex][columnIndex] !== ' ') {
//     console.log("this style has already been flipped!");
//     return
//   } else if (bombBoard[rowIndex][columnIndex] === 'B') {
//     playerBoard[rowIndex][columnIndex] = 'B';
//   } else {
//     playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
//   }
// }

// const printBoard = (board) => {
//   return board.map(row => row.join(' | ')).join('\n')
// }

// let playerBoard = generatePlayerBoard(5, 5);
// let bombBoard = generateBombBoard(5, 5, 2);
// console.log("The Player Board:")
// console.log(printBoard(playerBoard))
// console.log("The Bomb Board:");
// console.log(printBoard(bombBoard));
// flipTile(playerBoard, bombBoard, 4, 4);
// console.log('Update Player board:')
// console.log(printBoard(playerBoard))
