import { Cell } from './Cell.js';

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');



const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 400;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

// let columns;
// let rows;
const cellWidth = 40;
const cellHeight = 40;

export const columns = CANVAS_WIDTH/cellWidth;
export const rows = CANVAS_HEIGHT/cellHeight;

ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

let cells = [];

let current;

for(let row = 0; row < rows; row++){
  for(let col = 0; col < columns; col++){
    let cell = new Cell(row, col, cellWidth, cellHeight, rows, columns)
    cells.push(cell);
  }

  current = cells[0]
}

let prevTime = 0;
function draw(timestamp){

  for(let i = 0; i < cells.length; i++){
    cells[i].draw(ctx)
  }

  current.visited = true;
  let next = current.getNeighbor(cells)
  if(next){
    next.visited = true;
    current = next;
  }

  window.requestAnimationFrame(draw)
}

draw();


