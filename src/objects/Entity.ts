type EntityDrawingArgumentsParams = Parameters<CanvasPath["arc"]>;

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
  private _vel: [number, number];
  public constructor(
    ctx: CanvasRenderingContext2D,
    xPos,
    yPos,
    xVelocity: number = 0,
    yVelocity = 0
  ) {
    this.ctx = ctx;
    this._xPos = xPos;
    this._yPos = yPos;
    this._vel = [xVelocity, yVelocity];
  }
  updatePosition() {
    this.xPos += this._vel[0];
    this._yPos += this._vel[1];
  }

  set xPos(value: number) {
    if (value === NaN || value === undefined) {
      throw new Error("tried to set NaN or undefined");
    }
    this._xPos = value;
  }

  get xPos() {
    return this._xPos;
  }

  set yPos(value: number) {
    if (value === NaN || value === undefined) {
      throw new Error("tried to set NaN or undefined");
    }
    this._yPos = value;
  }

  get yPos() {
    return this._yPos;
  }

  get vel() {
    return this._vel;
  }

  set vel(newVel) {
    this._vel = newVel;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "red";
    this.ctx.arc(this.xPos, this.yPos, 50, 0, Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = "blue";
    this.ctx.arc(this.xPos, this.yPos, 50, Math.PI, 2 * Math.PI);
    this.ctx.stroke();
  }
}

enum EntityTypes {
  ASTEROID,
  SHIP,
  BULLET,
}

/*
  -Go forward
  -Go backward
  -Needs to be able to rotate
*/
export class Controller {}

export enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  //Do left right later
}
export class Ship extends Entity {
  type = EntityTypes.SHIP;
  power(direction: DIRECTIONS) {
    const [xVel, yVel] = this.vel;
    let newVel: [number, number] = [xVel, yVel];
    if (direction === DIRECTIONS.UP) {
      newVel = [xVel, yVel - 1];
    } else if (direction === DIRECTIONS.DOWN) {
      newVel = [xVel, yVel + 1];
    } else if (direction === DIRECTIONS.LEFT) {
      newVel = [xVel - 1, yVel];
    } else if (direction === DIRECTIONS.RIGHT) {
      newVel = [xVel + 1, yVel];
    }
    this.vel = newVel;
  }
}

class Bullet extends Entity {
  type = EntityTypes.BULLET;
}
