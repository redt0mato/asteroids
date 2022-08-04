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
  xPos: EntityDrawingArgumentsParams[0];
  yPos: EntityDrawingArgumentsParams[1];
  xVelocity: number;
  yVelocity: number;
  width: EntityDrawingArgumentsParams[2];
  height: EntityDrawingArgumentsParams[3];
  
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
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