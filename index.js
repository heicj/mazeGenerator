import { Cell } from './Cell.js';

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 400;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

const cellWidth = 10;
const cellHeight = 10;

const columns = CANVAS_WIDTH/cellWidth;
const rows = CANVAS_HEIGHT/cellHeight;

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

let cells = [];
let stack = [];

let current;

function removeWall(current, next){
  let row = current.row - next.row;
  let col = current.col - next.col;

  if(col == 1){ //moved left
    current.walls[3] = false;
    next.walls[1] = false;
  }else if(col == -1){ //moved right
    current.walls[1] = false;
    next.walls[3] = false;
  }
  
  if(row == 1){ //moved up
    current.walls[0] = false;
    next.walls[2] = false;
  }else if(row == -1){ //moved down
    current.walls[2] = false;
    next.walls[0] = false;
  }
}

for(let row = 0; row < rows; row++){
  for(let col = 0; col < columns; col++){
    let cell = new Cell(row, col, cellWidth, cellHeight, rows, columns)
    cells.push(cell);
  }

  current = cells[0]
}

let visitedCells = 0;
function draw(){

  for(let i = 0; i < cells.length; i++){
    cells[i].draw(ctx)
  }

  current.visited = true;
  current.highlight(ctx)
  let next = current.getNeighbor(cells)
  if(next){
    visitedCells++;
    next.visited = true;

    stack.push(current)

    removeWall(current, next)

    current = next;
  } else if(stack.length > 0) {
    current = stack.pop();
  }
  if(visitedCells < (rows *columns)) window.requestAnimationFrame(draw)
  
}

draw();
// while(visitedCells < 100){
//   // draw();
// }


