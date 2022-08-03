type EntityDrawingArgumentsParams = Parameters<CanvasPath["rect"]>


/**
 * Common class to store drawing and positioning an entity in Asteroids. 
 *
 * @remarks
 * Eg asteroids, bullets, and the ship. Will contain power-up. 
 *
 * @param x - x position on a 2D grid.
 * @param y - y position on a 2D grid.
 * @param w - width of a rectangle.
 * @param h - height of a rectangle
 * @returns An instance we can use to draw shapes
 *
 */
export class Entity {

  ctx: CanvasRenderingContext2D;
  x: EntityDrawingArgumentsParams[0];
  y: EntityDrawingArgumentsParams[1];
  width: EntityDrawingArgumentsParams[2];
  height: EntityDrawingArgumentsParams[3];
  
  draw() {
    console.log('we are drawing')
    this.ctx.beginPath();
    this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
    // ctx.rect(this.x, this.y, this.width, this.height);
    // ctx.fillStyle = "#FF0000";
    // ctx.fill();
    // ctx.closePath();
  }
}

