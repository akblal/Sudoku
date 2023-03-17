import React from 'react';

const rowLength = 9;
const colLength = 9;

const duplicateInRow = (puzzle) => {
  for (let i = 0; i < rowLength; i++) {
    let row = puzzle[i];
    let checkRow = [];
    for (let j = 0; j < rowLength; j++) {
      if (checkRow.indexOf(row[j]) < 0) {
        checkRow.push(row[j])
      }
    }
    if (checkRow.length != rowLength) {
      return true;
    }
  }
  return false;
}

const duplicateInCol = (puzzle) => {
  for (let i = 0; i < rowLength; i++) {
    let checkCol = [];
    for (let j = 0; j < rowLength; j++) {

      if (checkCol.indexOf(puzzle[j][i]) < 0) {
        checkCol.push(puzzle[j][i])
      }
    }
    if (checkCol.length != colLength) {
      return true;
    }
  }
  return false;
}

const duplicateInGrid = (puzzle) => {
  for (let i = 0; i < 3; i++) {
    let rowBegin = 3 * i;
    let rowEnd = rowBegin + 2;
    for (let j = 0; j < 3; j++) {
      let colBegin = 3 * j;
      let colEnd = colBegin + 2;
      let checkGrid = [];
      for (let k = rowBegin; k <= rowEnd; k++) {
        for (let l = colBegin; l <= colEnd; l++) {
          if (checkGrid.indexOf (puzzle[k][l]) < 0) {
            checkGrid.push(puzzle[k][l])
          }
        }
      }
      if (checkGrid.length != rowLength) {
        return true;
      }
    }
  }
  return false;
}

export {duplicateInRow, duplicateInCol, duplicateInGrid}