"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asteroid = exports.Ship = exports.DIRECTIONS = exports.Controller = exports.EntityTypes = exports.Entity = void 0;
var shipMaxSpeed = 1;
var Entity = (function () {
    function Entity(ctx, xPos, yPos, xVelocity, yVelocity) {
        if (xVelocity === void 0) { xVelocity = 0; }
        if (yVelocity === void 0) { yVelocity = 0; }
        this.type = EntityTypes.ENTITY;
        this.radius = 50;
        this.ctx = ctx;
        this._xPos = xPos;
        this._yPos = yPos;
        this._vel = [xVelocity, yVelocity];
    }
    Entity.prototype.updatePosition = function () {
        this.xPos += this._vel[0];
        this.yPos += this._vel[1];
    };
    Object.defineProperty(Entity.prototype, "xPos", {
        get: function () {
            return this._xPos;
        },
        set: function (value) {
            if (value === NaN || value === undefined) {
                throw new Error("tried to set NaN or undefined");
            }
            this._xPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "yPos", {
        get: function () {
            return this._yPos;
        },
        set: function (value) {
            if (value === NaN || value === undefined) {
                throw new Error("tried to set NaN or undefined");
            }
            this._yPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "vel", {
        get: function () {
            return this._vel;
        },
        set: function (newVel) {
            this._vel = newVel;
        },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "red";
        this.ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = "blue";
        this.ctx.arc(this.xPos, this.yPos, this.radius, Math.PI, 2 * Math.PI);
        this.ctx.stroke();
    };
    return Entity;
}());
exports.Entity = Entity;
var EntityTypes;
(function (EntityTypes) {
    EntityTypes[EntityTypes["ASTEROID"] = 0] = "ASTEROID";
    EntityTypes[EntityTypes["SHIP"] = 1] = "SHIP";
    EntityTypes[EntityTypes["BULLET"] = 2] = "BULLET";
    EntityTypes[EntityTypes["ENTITY"] = 3] = "ENTITY";
})(EntityTypes = exports.EntityTypes || (exports.EntityTypes = {}));
var Controller = (function () {
    function Controller() {
    }
    return Controller;
}());
exports.Controller = Controller;
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS = exports.DIRECTIONS || (exports.DIRECTIONS = {}));
var bulletRadius = 5;
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = EntityTypes.SHIP;
        _this.radius = 15;
        return _this;
    }
    Ship.prototype.power = function (direction) {
        var _a = this.vel, xVel = _a[0], yVel = _a[1];
        var newVel = [xVel, yVel];
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
    };
    Ship.prototype.fireBullet = function (GameWorld) {
        if (GameWorld.getInstance().entities.indexOf(this) === -1) {
            return;
        }
        var _a = this, ctx = _a.ctx, shipXPos = _a.xPos, shipYPos = _a.yPos, shipVelocity = _a.vel, radius = _a.radius;
        var newBullet = new Bullet(ctx, shipXPos +
            2.25 * radius * (shipVelocity[0] / Math.abs(shipVelocity[0] || 1)), shipYPos +
            2.25 * radius * (shipVelocity[1] / Math.abs(shipVelocity[1] || 1)), (shipVelocity[0] / Math.abs(shipVelocity[0] || 1)) * 3, (shipVelocity[1] / Math.abs(shipVelocity[1] || 1)) * 3);
        GameWorld.getInstance().entities.push(newBullet);
    };
    return Ship;
}(Entity));
exports.Ship = Ship;
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = EntityTypes.BULLET;
        _this.radius = 5;
        return _this;
    }
    return Bullet;
}(Entity));
var Asteroid = (function (_super) {
    __extends(Asteroid, _super);
    function Asteroid() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this, args[0], args[1], args[2], Math.random() * 1.2, Math.random() * 1.2) || this;
        _this.type = EntityTypes.ASTEROID;
        return _this;
    }
    return Asteroid;
}(Entity));
exports.Asteroid = Asteroid;
//# sourceMappingURL=Entity.js.map