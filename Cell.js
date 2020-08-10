export class Cell{
  constructor(x, y, width, height){
    this.x = x * width;
    this.y = y * width;
    this.width = width;
    this.height = height;
    this.wallColor = 'black';
    this.walls = [true, true, true, true]; //wall order is [Top, Right, Bottom, Left]
    this.visited = false;
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

  draw(ctx){
   for(let i = 0; i < this.walls.length; i++){
     if(this.walls[0]) this.drawTopWall(ctx);
     if(this.walls[1]) this.drawRightWall(ctx);
     if(this.walls[2]) this.drawBottomWall(ctx);
     if(this.walls[3]) this.drawLeftWall(ctx);
   }
  }

}