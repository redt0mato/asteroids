
import {Entity, Ship} from './objects/entity'

const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");

class GameWorld {

  private static _instance: GameWorld = new GameWorld(ctx);
  private entities: Entity[] = [];
  private ctx: CanvasRenderingContext2D;

  private constructor(ctx) {
    if(GameWorld._instance){
      throw new Error("Error: Instantiation failed: Use GameWorld.getInstance() instead of new.");
    }
    GameWorld._instance = this;
    const shipInstance = new Ship(ctx, 100, 75, 1 ,1);
    this.ctx = ctx;
    
    GameWorld._instance.entities = [shipInstance];
  }

  public static getInstance(): GameWorld {
      if (!GameWorld._instance) {
          GameWorld._instance = new GameWorld(ctx);
      }
      return GameWorld._instance;
  }

  public updateGameLogic() {
    //not visual portion
      console.log("my logic!");
  }

  public drawMap() {
    GameWorld._instance.ctx.clearRect(0, 0, canvas.width, canvas.height);

    GameWorld._instance.entities.forEach((entity) => {
      entity.draw();
      entity.updatePosition();
    })
    //visual portion

    //Request below after x-y and other drawing information is finished
    requestAnimationFrame(GameWorld._instance.drawMap)
    console.log('drawMap running')
  }
}

const GameWorldSingleton = GameWorld.getInstance();
console.log(GameWorldSingleton)
 
// newEntityInstance.ctx = ctx;
// newEntityInstance.x = 20;
// newEntityInstance.y = 40;
// newEntityInstance.width= 50;
// newEntityInstance.height= 50;

requestAnimationFrame(GameWorldSingleton.drawMap)

console.log('Game script running')