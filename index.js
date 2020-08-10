import { Cell } from './Cell.js';

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');



const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 500;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

const columns = 10;
const rows = 10;
const cellWidth = CANVAS_WIDTH/columns;
const cellHeight = CANVAS_HEIGHT/rows;

ctx.fillStyle = 'purple';
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

let cells = [];

for(let row = 0; row < rows; row++){
  for(let col = 0; col < columns; col++){
    let cell = new Cell(row, col, cellWidth, cellHeight)
    cells.push(cell);
    cell.draw(ctx);
  }
}
