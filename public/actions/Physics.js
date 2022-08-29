function calculateDistanceBetweenTwoPoints(coords1, coords2) {
    return Math.sqrt(Math.pow(Math.abs(coords1[0] - coords2[0]), 2) +
        Math.pow(Math.abs(coords1[1] - coords2[1]), 2));
}
function doCirclesCollide(...args) {
    const [coords1, coords2, radius1, radius2] = args;
    return (calculateDistanceBetweenTwoPoints(coords1, coords2) < radius1 + radius2);
}
export function calculatePhysics(GameWorld) {
    const entitiesArray = GameWorld.getInstance().entities;
    let entity1, entity2;
    for (let i = 0; i < entitiesArray.length; i++) {
        for (let j = i + 1; j < entitiesArray.length; j++) {
            entity1 = entitiesArray[i];
            entity2 = entitiesArray[j];
            if (entity1.type !== entity2.type &&
                doCirclesCollide([entity1.xPos, entity1.yPos], [entity2.xPos, entity2.yPos], entity1.radius, entity2.radius)) {
                const oldEntitiesArray = GameWorld.getInstance().entities;
                let newArray = oldEntitiesArray.slice(0, i);
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
//# sourceMappingURL=Physics.js.map