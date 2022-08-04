type EntityDrawingArgumentsParams = Parameters<CanvasPath["arc"]>


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
  xPos: EntityDrawingArgumentsParams[0];
  yPos: EntityDrawingArgumentsParams[1];
  xVelocity: number;
  yVelocity: number;
  public constructor(ctx: CanvasRenderingContext2D, xPos, yPos, xVelocity: number, yVelocity ){
    this.ctx = ctx;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
  }
  updatePosition() {
    this.xPos += this.xVelocity  ;
    debugger;
    this.yPos += this.yVelocity;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.xPos, this.yPos, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

enum EntityTypes {
  ASTEROID,
  SHIP,
  BULLET
}


/*
  -Go forward
  -Go backward
  -Needs to be able to rotate
*/
export class Controller {

}
 
export class Ship extends Entity {
  type = EntityTypes.SHIP

}