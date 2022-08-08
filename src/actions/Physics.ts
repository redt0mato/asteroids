//Currently will just do bullets being fired?
//Collision eventually circles collide with other circles.

import { Entity, Ship } from "../objects/entity";

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

  //Possible improvement hard to infer what the argument should be without looking at the code
  const [ship, asteroid] = GameWorld.getInstance().entities as [Ship, Entity];

  console.log("calculatePhysics running");
  //TO-DO Remove radius magic number and update. Put it on the entity instance
  if (
    doCirclesCollide(
      [ship.xPos, ship.yPos],
      [asteroid.xPos, asteroid.yPos],
      50,
      50
    )
  ) {
    //remove
    GameWorld.getInstance().entities = [];
  } else {
    console.log("nothing collided");
  }
}
