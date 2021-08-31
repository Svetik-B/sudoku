module.exports = function solveSudoku(matrix) {
  // your solution
  let emptySpot = nextEmptySpot(matrix);
  
  let row = emptySpot[0];
  let col = emptySpot[1]

  if (row === -1) {
    
    return matrix
  }

  for (let num = 1; num <= 9; num++) {
    if (checkValue(matrix, row, col, num)) {
      matrix[row][col] = num;     
      solveSudoku(matrix);

    }
  }

  if (nextEmptySpot(matrix)[0] !== -1) {
    matrix[row][col] = 0;
  }

  return matrix;

}

//доска заполнена или нет
function nextEmptySpot(matrix) {

for (let i = 0; i < 9; i++) {
  if (matrix[i].indexOf(0) != -1) {
    return [i, matrix[i].indexOf(0)];
  }
}
return [-1, -1]
}

// проверка строки
function checkRow(matrix, row, value) {

if (matrix[row].indexOf(value) != -1) {
  return false;
}
return true;

}

//проверить столбец
function checkColumn(matrix, column, value) {
for (let i = 0; i < 9; i++) {
  if (matrix[i][column] === value) {
    return false
  }
}
return true;
}

//проверка в квадратах 3*3
function checkSquare(matrix, row, column, value) {
boxRow = Math.floor(row / 3) * 3;
boxCol = Math.floor(column / 3) * 3;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++)
    if (matrix[boxRow + i][boxCol + j] === value) {
      return false
    }
}
return true;
}


function checkValue(matrix, row, column, value) {
if (checkRow(matrix, row, value) &&
  checkColumn(matrix, column, value) &&
  checkSquare(matrix, row, column, value)) {
  return true;
}
return false;
}
