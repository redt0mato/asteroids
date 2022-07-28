const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

/*
  This is how we draw the entity and to use types to make explicit the relationship
*/
type EntityDrawingArgumentsParams = Parameters<typeof ctx.rect>


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
class Entity {

  x: EntityDrawingArgumentsParams[0];
  y: EntityDrawingArgumentsParams[1];
  width: EntityDrawingArgumentsParams[2];
  height: EntityDrawingArgumentsParams[3];

  draw(context: typeof ctx, ) {

  }
}

const newEntityInstance = new Entity();
 
