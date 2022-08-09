import { Entity, Ship } from "./objects/entity";
import { setupControls } from "./actions/Controller";
import { calculatePhysics } from "./actions/Physics";

const canvas = document.getElementsByTagName("canvas")[0];

var ctx = canvas.getContext("2d");
class GameWorld {
  private static _instance: GameWorld = new GameWorld(ctx);
  public entities: Entity[] = [];
  private ctx: CanvasRenderingContext2D;

  private constructor(ctx) {
    if (GameWorld._instance) {
      throw new Error(
        "Error: Instantiation failed: Use GameWorld.getInstance() instead of new."
      );
    }

    //Initialize the internal game state
    GameWorld._instance = this;
    const shipInstance = new Ship(ctx, 100, 75, 0, 0);
    this.ctx = ctx;

    const mockAsteroidInstance = new Entity(ctx, 250, 250, 0, 0);
    GameWorld._instance.entities = [shipInstance, mockAsteroidInstance];

    setupControls(shipInstance, GameWorld);
  }

  public static getInstance(): GameWorld {
    if (!GameWorld._instance) {
      GameWorld._instance = new GameWorld(ctx);
    }
    return GameWorld._instance;
  }

  public updateGameState() {
    //not visual portion
    console.log("my logic!");
  }

  //really drawing the next frame
  public drawMap() {
    GameWorld._instance.ctx.clearRect(0, 0, canvas.width, canvas.height);

    GameWorld._instance.entities.forEach((entity) => {
      entity.draw();
      entity.updatePosition();
    });
    //visual portion

    //Request below after x-y and other drawing information is finished
    // requestAnimationFrame(GameWorld._instance.drawMap);
  }
  public requestGameAnimationFrame() {
    //calculate Physics
    calculatePhysics(GameWorld);

    //calculate nextMapFrame
    GameWorld._instance.drawMap();
    requestAnimationFrame(GameWorld._instance.requestGameAnimationFrame);
  }
}

const GameWorldSingleton = GameWorld.getInstance();

// newEntityInstance.ctx = ctx;
// newEntityInstance.x = 20;
// newEntityInstance.y = 40;
// newEntityInstance.width= 50;
// newEntityInstance.height= 50;

requestAnimationFrame(GameWorldSingleton.requestGameAnimationFrame);
