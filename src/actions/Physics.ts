import { Entity, EntityTypes, Ship } from "../objects/Entity";

/*
  Calculate distance between 2 points in 2D Cartesian coordinate system
*/
function calculateDistanceBetweenTwoPoints(
  coords1: [number, number],
  coords2: [number, number]
) {
  return Math.sqrt(
    Math.pow(Math.abs(coords1[0] - coords2[0]), 2) +
      Math.pow(Math.abs(coords1[1] - coords2[1]), 2)
  );
}

/*
  https://happycoding.io/tutorials/processing/collision-detection
*/
type DoCirclesCollideArgs = [
  Parameters<typeof calculateDistanceBetweenTwoPoints>[0],
  Parameters<typeof calculateDistanceBetweenTwoPoints>[1],
  number,
  number
];

/*
  Closed form solution for determining if two circles intersect
*/
function doCirclesCollide(...args: DoCirclesCollideArgs) {
  //Pythagorean Theorem
  const [coords1, coords2, radius1, radius2] = args;
  return (
    calculateDistanceBetweenTwoPoints(coords1, coords2) < radius1 + radius2
  );
}
export function calculatePhysics(GameWorld) {
  /*
    GameWorldSingleton
    This is a N^2 approach if we iterate over number of objects.

    We should improve this.
  */

  const entitiesArray = GameWorld.getInstance().entities;

  let entity1, entity2;

  for (let i = 0; i < entitiesArray.length; i++) {
    for (let j = i + 1; j < entitiesArray.length; j++) {
      entity1 = entitiesArray[i];
      entity2 = entitiesArray[j];
      if (
        entity1.type !== entity2.type &&
        doCirclesCollide(
          [entity1.xPos, entity1.yPos],
          [entity2.xPos, entity2.yPos],
          entity1.radius,
          entity2.radius
        )
      ) {
        //remove
        const oldEntitiesArray = GameWorld.getInstance().entities;

        let newArray = oldEntitiesArray.slice(0, i);

        newArray = newArray
          .concat(oldEntitiesArray.slice(i + 1, j))
          .concat(oldEntitiesArray.slice(j + 1));

        GameWorld.getInstance().entities = newArray;
      } else {
        console.log("nothing collided");
      }
    }
  }
  //Possible improvement hard to infer what the argument should be without looking at the code
  // const [ship, asteroid] = GameWorld.getInstance().entities as [Ship, Entity];

  //TO-DO Remove radius magic number and update. Put it on the entity instance
}
