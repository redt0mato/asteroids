const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");
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

  ctx: typeof ctx;
  x: EntityDrawingArgumentsParams[0];
  y: EntityDrawingArgumentsParams[1];
  width: EntityDrawingArgumentsParams[2];
  height: EntityDrawingArgumentsParams[3];
  
  draw() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    // ctx.rect(this.x, this.y, this.width, this.height);
    // ctx.fillStyle = "#FF0000";
    // ctx.fill();
    // ctx.closePath();

  }
}

const newEntityInstance = new Entity();
 
newEntityInstance.ctx = ctx;
newEntityInstance.x = 20;
newEntityInstance.y = 40;
newEntityInstance.width= 50;
newEntityInstance.height= 50;

newEntityInstance.draw();


class GameWorld {

  private static _instance: GameWorld = new GameWorld();

  private constructor() {
    if(GameWorld._instance){
      throw new Error("Error: Instantiation failed: Use GameWorld.getInstance() instead of new.");
    }
    GameWorld._instance = this;
  }

  public static getInstance(): GameWorld {
      if (!GameWorld._instance) {
          GameWorld._instance = new GameWorld();
      }
      return GameWorld._instance;
  }

  public updateGameLogic() {
    //not visual portion
      console.log("my logic!");
  }

  public drawMap() {
    //visual portion
  }
}

const GameWorldSingleton = GameWorld.getInstance();