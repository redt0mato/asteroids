"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePhysics = void 0;
function calculateDistanceBetweenTwoPoints(coords1, coords2) {
    return Math.sqrt(Math.pow(Math.abs(coords1[0] - coords2[0]), 2) +
        Math.pow(Math.abs(coords1[1] - coords2[1]), 2));
}
function doCirclesCollide() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var coords1 = args[0], coords2 = args[1], radius1 = args[2], radius2 = args[3];
    return (calculateDistanceBetweenTwoPoints(coords1, coords2) < radius1 + radius2);
}
function calculatePhysics(GameWorld) {
    var entitiesArray = GameWorld.getInstance().entities;
    var entity1, entity2;
    for (var i = 0; i < entitiesArray.length; i++) {
        for (var j = i + 1; j < entitiesArray.length; j++) {
            entity1 = entitiesArray[i];
            entity2 = entitiesArray[j];
            if (entity1.type !== entity2.type &&
                doCirclesCollide([entity1.xPos, entity1.yPos], [entity2.xPos, entity2.yPos], entity1.radius, entity2.radius)) {
                var oldEntitiesArray = GameWorld.getInstance().entities;
                var newArray = oldEntitiesArray.slice(0, i);
                newArray = newArray
                    .concat(oldEntitiesArray.slice(i + 1, j))
                    .concat(oldEntitiesArray.slice(j + 1));
                GameWorld.getInstance().entities = newArray;
            }
            else {
                console.log("nothing collided");
            }
        }
    }
}
exports.calculatePhysics = calculatePhysics;
//# sourceMappingURL=Physics.js.map