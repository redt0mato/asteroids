import { Entity, Ship } from "./objects/entity";
import { setupControls } from "./actions/Controller";
import { calculatePhysics } from "./actions/Physics";

const canvas = document.getElementsByTagName("canvas")[0];

var ctx = canvas.getContext("2d");

//TO-DO update type definitions more
class GameWorld {
  private static _instance: GameWorld = new GameWorld(ctx);
  public entities: Entity[] = [];
  private ctx: CanvasRenderingContext2D;
  public maximumSpeed = 1; //This is for both the x-y direction

  private constructor(ctx) {
    if (GameWorld._instance) {
      throw new Error(
        "Error: Instantiation failed: Use GameWorld.getInstance() instead of new."
      );
    }

    //Initialize the internal game state
    GameWorld._instance = this;

    const { height, width } = document.getElementsByTagName("canvas")[0];
    const shipInstance = new Ship(ctx, width / 2, height / 2, 0, 0);
    this.ctx = ctx;

    //TO-DO generate random spawn points for asteroid
    const mockAsteroidInstance = new Entity(ctx, 250, 250);
    GameWorld._instance.entities = [shipInstance, mockAsteroidInstance];

    setupControls(shipInstance, GameWorld);
  }

  public static getInstance(): GameWorld {
    if (!GameWorld._instance) {
      GameWorld._instance = new GameWorld(ctx);
    }
    return GameWorld._instance;
  }

  public checkIfOutOfBounds(entity) {
    //TO-DO below is size
    if (entity.xPos < -50) {
      entity.xPos = 770;
    } else if (entity.xPos > 770) {
      entity.xPos = -50;
    }

    if (entity.yPos < -50) {
      entity.yPos = 850;
    } else if (entity.yPos > 850) {
      entity.yPos = -50;
    }
    return true;
  }

  public updatePositionOfEntity(entity) {}

  //really drawing the next frame
  public drawMap() {
    //detect if anything out-of-bounds
    //translate it on a mirror
    //POC only teleport from bottom-to-top
    //if upper thing is above then teleport
    GameWorld._instance.ctx.clearRect(0, 0, canvas.width, canvas.height);

    GameWorld._instance.entities.forEach((entity) => {
      GameWorld._instance.checkIfOutOfBounds(entity);
      entity.draw();
      entity.updatePosition();
    });
    //visual portion

    //Request below after x-y and other drawing information is finished
    // requestAnimationFrame(GameWorld._instance.drawMap);
  }
  public requestGameAnimationFrame() {
    calculatePhysics(GameWorld);

    //calculate nextMapFrame
    GameWorld._instance.drawMap();
    requestAnimationFrame(GameWorld._instance.requestGameAnimationFrame);
  }
}

const GameWorldSingleton = GameWorld.getInstance();

requestAnimationFrame(GameWorldSingleton.requestGameAnimationFrame);
