"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupControls = void 0;
var entity_1 = require("../objects/Entity");
function setupControls(shipInstance, GameWorld) {
    document.onkeydown = function (event) {
        if (event.keyCode === 37) {
            shipInstance.power(entity_1.DIRECTIONS.LEFT);
        }
        else if (event.keyCode === 38) {
            shipInstance.power(entity_1.DIRECTIONS.UP);
        }
        else if (event.keyCode === 39) {
            shipInstance.power(entity_1.DIRECTIONS.RIGHT);
        }
        else if (event.keyCode === 40) {
            shipInstance.power(entity_1.DIRECTIONS.DOWN);
        }
        else if (event.keyCode === 32) {
            shipInstance.fireBullet(GameWorld);
        }
    };
}
exports.setupControls = setupControls;
//# sourceMappingURL=Controller.js.map