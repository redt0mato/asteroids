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

/*
  Common class for how we draw an entity in Asteroids
*/
class Entity {
  
  x: EntityDrawingArgumentsParams[0];
  y: EntityDrawingArgumentsParams[1];
  width: EntityDrawingArgumentsParams[2];
  height: EntityDrawingArgumentsParams[3];

  draw(context: typeof ctx, ) {

  }
}
 
