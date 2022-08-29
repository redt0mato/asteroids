const shipMaxSpeed = 1;
export class Entity {
    constructor(ctx, xPos, yPos, xVelocity = 0, yVelocity = 0) {
        this.ctx = ctx;
        this.type = EntityTypes.ENTITY;
        this.radius = 50;
        this.ctx = ctx;
        this._xPos = xPos;
        this._yPos = yPos;
        this._vel = [xVelocity, yVelocity];
    }
    updatePosition() {
        this.xPos += this._vel[0];
        this.yPos += this._vel[1];
    }
    set xPos(value) {
        if (value === NaN || value === undefined) {
            throw new Error("tried to set NaN or undefined");
        }
        let test;
        this._xPos = value;
    }
    get xPos() {
        return this._xPos;
    }
    set yPos(value) {
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
export var EntityTypes;
(function (EntityTypes) {
    EntityTypes[EntityTypes["ASTEROID"] = 0] = "ASTEROID";
    EntityTypes[EntityTypes["SHIP"] = 1] = "SHIP";
    EntityTypes[EntityTypes["BULLET"] = 2] = "BULLET";
    EntityTypes[EntityTypes["ENTITY"] = 3] = "ENTITY";
})(EntityTypes || (EntityTypes = {}));
export class Controller {
}
export var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS || (DIRECTIONS = {}));
const bulletRadius = 5;
export class Ship extends Entity {
    constructor() {
        super(...arguments);
        this.type = EntityTypes.SHIP;
        this.radius = 15;
    }
    power(direction) {
        const [xVel, yVel] = this.vel;
        let newVel = [xVel, yVel];
        if (direction === DIRECTIONS.UP) {
            newVel = [xVel, yVel - 1];
        }
        else if (direction === DIRECTIONS.DOWN) {
            newVel = [xVel, yVel + 1];
        }
        else if (direction === DIRECTIONS.LEFT) {
            newVel = [xVel - 1, yVel];
        }
        else if (direction === DIRECTIONS.RIGHT) {
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
        const { ctx, xPos: shipXPos, yPos: shipYPos, vel: shipVelocity, radius, } = this;
        const newBullet = new Bullet(ctx, shipXPos +
            2.25 * radius * (shipVelocity[0] / Math.abs(shipVelocity[0] || 1)), shipYPos +
            2.25 * radius * (shipVelocity[1] / Math.abs(shipVelocity[1] || 1)), (shipVelocity[0] / Math.abs(shipVelocity[0] || 1)) * 3, (shipVelocity[1] / Math.abs(shipVelocity[1] || 1)) * 3);
        const a = new Set(["hi"]);
        GameWorld.getInstance().entities.push(newBullet);
    }
}
class Bullet extends Entity {
    constructor() {
        super(...arguments);
        this.type = EntityTypes.BULLET;
        this.radius = 5;
    }
}
export class Asteroid extends Entity {
    constructor(...args) {
        super(args[0], args[1], args[2], Math.random() * 1.2, Math.random() * 1.2);
        this.type = EntityTypes.ASTEROID;
    }
}
//# sourceMappingURL=Entity.js.map