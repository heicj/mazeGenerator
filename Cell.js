
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export class Cell{ //x is row y is col
  constructor(row, col, width, height, rows, columns){
    this.row = row;
    this.col = col;
    this.x = col * width;
    this.y = row * width;
    this.width = width;
    this.height = height;

    this.totalRows = rows;
    this.totalColumns = columns;
    this.wallColor = 'red';
    this.walls = [true, true, true, true]; //wall order is [Top, Right, Bottom, Left]
    this.visited = false;
  }

  index(row, col){
    if(row < 0 || col < 0 || row > this.rows - 1 || col > this.columns - 1){
      return -1;
    } else {
      return col + row * this.totalColumns; //figure out how to not hard code 10, use columns const from index.js
    }
  }

  getNeighbor(grid){
    let neighbors = [];

    let top = grid[this.index((this.row - 1), this.col)];
    let right = grid[this.index(this.row, (this.col + 1))];
    let bottom = grid[this.index((this.row + 1), this.col)];
    let left = grid[this.index(this.row, (this.col - 1))]

    if(top && !top.visited){
      neighbors.push(top)
    }

    if(right && !right.visited){
      neighbors.push(right)
    }

    if(bottom && !bottom.visited){
      neighbors.push(bottom)
    }

    if(left && !left.visited){
      neighbors.push(left)
    }

    if(neighbors.length > 0 ){
      const i = getRandomIntInclusive(0, neighbors.length -1)
      return neighbors[i];
    }else{
      return undefined;
    }

  }

  drawTopWall(ctx){
    ctx.fillStyle = this.wallColor;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.width, this.y);
    ctx.stroke(); 
  }

  drawRightWall(ctx){
    ctx.fillStyle = this.wallColor;
    ctx.beginPath();
    ctx.moveTo(this.x + this.width, this.y);
    ctx.lineTo(this.x + this.width, this.y + this.height);
    ctx.stroke(); 
  }

  drawBottomWall(ctx){
    ctx.fillStyle = this.wallColor;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + this.height);
    ctx.lineTo(this.x + this.width, this.y + this.height);
    ctx.stroke(); 
  }

  drawLeftWall(ctx){
    ctx.fillStyle = this.wallColor;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.height);
    ctx.stroke(); 
  }

  highlight(ctx){
    ctx.fillStyle = 'yellow'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  draw(ctx){
     if(this.walls[0]) this.drawTopWall(ctx);
     if(this.walls[1]) this.drawRightWall(ctx);
     if(this.walls[2]) this.drawBottomWall(ctx);
     if(this.walls[3]) this.drawLeftWall(ctx);

     if(this.visited){
       ctx.fillStyle = 'lightblue'
       ctx.fillRect(this.x, this.y, this.width, this.height)
     }
  }

}