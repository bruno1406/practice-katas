// 5kyu
//Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter.
//If the board is valid return 'Finished!', otherwise return 'Try again!'

const wrongSudoku = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

const correctSudoku = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function doneOrNot(board) {
  let row = [];
  let rowRev = [];
  let square = [];
  let reverse = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      reverse[j].push(board[i][j]);
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!row.includes(board[i][j])) {
        row.push(board[i][j]);
      } else {
        return "Try again!";
      }
      if (!rowRev.includes(reverse[i][j])) {
        rowRev.push(reverse[i][j]);
      } else {
        return "Try again!";
      }
      if (
        (i === 1 && j === 1) ||
        (i === 1 && j === 4) ||
        (i === 1 && j === 7) ||
        (i === 4 && j === 1) ||
        (i === 4 && j === 4) ||
        (i === 4 && j === 7) ||
        (i === 7 && j === 1) ||
        (i === 7 && j === 4) ||
        (i === 7 && j === 7)
      ) {
        square.push(board[i - 1][j - 1]);
        square.push(board[i][j - 1]);
        square.push(board[i + 1][j - 1]);
        square.push(board[i - 1][j]);
        square.push(board[i][j]);
        square.push(board[i + 1][j]);
        square.push(board[i - 1][j + 1]);
        square.push(board[i][j + 1]);
        square.push(board[i + 1][j + 1]);
        for (let k = 1; k < 10; k++) {
          if (!square.includes(k)) {
            return "Try again!";
          }
        }
        square = [];
      }
    }

    row = [];
    rowRev = [];
  }

  return "Finished!";
}

doneOrNot(wrongSudoku);
doneOrNot(correctSudoku);
