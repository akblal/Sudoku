import React from 'react';
import { createRoot } from 'react-dom/client';

import { duplicateInRow, duplicateInCol, duplicateInGrid } from '../src/components/SolvePuzzle/SolvePuzzle.jsx';

import axios from 'axios';

const container = document.getElementById('root');
const root = createRoot(container);

function App () {

  const solutionString = "527316489896542731314987562172453896689271354453698217941825673765134928238769145";
  const puzzle = [...Array(9).fill(0)].map((cell) => Array(9).fill(0))
  const rowLength = 9;
  const colLength = 9;

  const displaySolution = () => {
    let counter = 0;
    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        puzzle[i][j] = solutionString.charAt(counter);
        counter++;
      }
    }
    console.log(puzzle)
  }

  displaySolution();
  console.log(duplicateInRow(puzzle));
  console.log(duplicateInCol(puzzle));
  console.log(duplicateInGrid(puzzle));

  return (
    <div>
      Sudoku
    </div>
  )
}

root.render(<App />)