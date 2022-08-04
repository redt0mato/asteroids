
import {Entity, Ship} from './objects/entity'

const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");

const newEntityInstance = new Entity();
 
newEntityInstance.ctx = ctx;
newEntityInstance.xPos = 20;
newEntityInstance.yPos = 40;
newEntityInstance.width= 50;
newEntityInstance.height= 50;

newEntityInstance.draw();
class GameWorld {

  private static _instance: GameWorld = new GameWorld();
  private entities: Entity[];

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

  public static drawMap() {
    //visual portion

    //Request below after x-y and other drawing information is finished
    //requestAnimationFrame(GameWorld.drawMap)
  }
}

const GameWorldSingleton = GameWorld.getInstance();

const shipInstance = new Ship();
 
// newEntityInstance.ctx = ctx;
// newEntityInstance.x = 20;
// newEntityInstance.y = 40;
// newEntityInstance.width= 50;
// newEntityInstance.height= 50;

//requestAnimationFrame(GameWorld.drawMap)

console.log('hello world s')