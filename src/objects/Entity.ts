type EntityDrawingArgumentsParams = Parameters<CanvasPath["arc"]>;

const shipMaxSpeed = 1; //along both axis

/**
 * Common class to store drawing and positioning an entity in Asteroids.
 *
 * @remarks
 * Eg asteroids, bullets, and the ship. The ship is actually a circle.
 *
 * @param xPos - x position on a 2D grid.
 * @param yPos - y position on a 2D grid.
 * @param xVelocity - x-velocity on a 2d grid.
 * @param yVelocity - y-velocity on a 2d grid.
 * @returns An instance we can use to draw shapes
 *
 */
export class Entity {
  private _xPos: EntityDrawingArgumentsParams[0];
  private _yPos: EntityDrawingArgumentsParams[1];
  private _vel: [number, number];
  public type: EntityTypes = EntityTypes.ENTITY;
  public radius: number = 50;

  public constructor(
    public ctx: CanvasRenderingContext2D,
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
    this.yPos += this._vel[1];
  }

  set xPos(value: number) {
    if (value === NaN || value === undefined) {
      throw new Error("tried to set NaN or undefined");
    }
    let test: number;

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
    this.ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = "blue";
    this.ctx.arc(this.xPos, this.yPos, this.radius, Math.PI, 2 * Math.PI);
    this.ctx.stroke();
  }
}

export enum EntityTypes {
  ASTEROID,
  SHIP,
  BULLET,
  ENTITY,
}

export class Controller {}

export enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const bulletRadius = 5;

/**
 * Ship class to store logic for player-controlled ship.
 * Currently there should ONLY be one in the game world instance.
 *
 * @remarks
 * This is the only object that the player can control. They can use it to fire bullets.
 *
 * @param x - x position on a 2D grid.
 * @param y - y position on a 2D grid.
 * @param w - width of a rectangle.
 * @param h - height of a rectangle
 * @returns An instance we can use to draw shapes
 *
 */
export class Ship extends Entity {
  type = EntityTypes.SHIP;
  public radius: number = 15;
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
    this.vel = [
      Math.abs(newVel[0]) <= 1.5
        ? newVel[0]
        : (newVel[0] / Math.abs(newVel[0] || 1)) * 1.5,
      Math.abs(newVel[1]) <= 1.5
        ? newVel[1]
        : (newVel[1] / Math.abs(newVel[1] || 1)) * 1.5,
    ];
  }

  fireBullet(GameWorld) {
    if (GameWorld.getInstance().entities.indexOf(this) === -1) {
      return;
    }

    //TO-DO do not like the casting below
    const {
      ctx,
      xPos: shipXPos,
      yPos: shipYPos,
      vel: shipVelocity,
      radius,
    } = this as Ship;

    //TO-DO make explicit the relationship between 3 and 1.5 see power(ship)
    const newBullet = new Bullet(
      ctx,
      shipXPos +
        2.25 * radius * (shipVelocity[0] / Math.abs(shipVelocity[0] || 1)),
      shipYPos +
        2.25 * radius * (shipVelocity[1] / Math.abs(shipVelocity[1] || 1)),
      (shipVelocity[0] / Math.abs(shipVelocity[0] || 1)) * 3,
      (shipVelocity[1] / Math.abs(shipVelocity[1] || 1)) * 3
    );

    const a = new Set(["hi"]);
    GameWorld.getInstance().entities.push(newBullet);
  }
}

//I wanted this to be the child class of Ship but there are no inner classes in JS atm.
class Bullet extends Entity {
  type = EntityTypes.BULLET;
  public radius: number = 5;
}

export class Asteroid extends Entity {
  type = EntityTypes.ASTEROID;
  public constructor(...args) {
    /*
     * TO-DO
     * following points of imprveoemtn
     * -can we stop doing the args[0] is there a way to not have to do that/syntactical sugar at the minimum?
     * -make the relationship between velocity of asteroid which is always lower than ship more explicit
     * -type the constructor args to match Asteroid
     */
    super(args[0], args[1], args[2], Math.random() * 1.2, Math.random() * 1.2);
  }
}
