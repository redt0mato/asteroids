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
  public ctx: CanvasRenderingContext2D;
  private _xPos: EntityDrawingArgumentsParams[0];
  private _yPos: EntityDrawingArgumentsParams[1];
  private _xVelocity: number;
  private _yVelocity: number;
  public constructor(ctx: CanvasRenderingContext2D, xPos, yPos, xVelocity: number, yVelocity ){
    this.ctx = ctx;
    this._xPos = xPos;
    this._yPos = yPos;
    this._xVelocity = xVelocity;
    this._yVelocity = yVelocity;
  }
  updatePosition() {
    this.xPos += this._xVelocity;
    this._yPos += this._yVelocity;
  }

  set xPos(value: number) {
    if(value === NaN || value === undefined) {
      throw new Error('tried to set NaN or undefined')
    }
    this._xPos = value;
  }

  get xPos() {
    return this._xPos;
  }

  set yPos(value: number) {
    if(value === NaN || value === undefined) {
      throw new Error('tried to set NaN or undefined')
    }
    this._yPos = value;
  }

  get yPos() {
    return this._yPos;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'red';
    this.ctx.arc(this.xPos, this.yPos, 50, 0,  Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'blue';
    this.ctx.arc(this.xPos, this.yPos, 50,  Math.PI, 2 * Math.PI);
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