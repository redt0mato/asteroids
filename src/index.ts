import { Asteroid, Entity, Ship } from "./objects/entity";
import { setupControls } from "./actions/Controller";
import { calculatePhysics } from "./actions/Physics";

const canvas = document.getElementsByTagName("canvas")[0];

var ctx = canvas.getContext("2d");
console.log("running");
//TO-DO update type definitions more
class GameWorld {
  private static _instance: GameWorld = new GameWorld(ctx);
  public entities: Entity[] = [];
  private ctx: CanvasRenderingContext2D;
  public maximumSpeed = 1; //This is for both the x-y direction
  public isGameRunning = true;

  private constructor(ctx) {
    if (GameWorld._instance) {
      throw new Error(
        "Error: Instantiation failed: Use GameWorld.getInstance() instead of new."
      );
    }
    //TO-DO move initialize game state to another function so I can start/spawn a new game

    //Initialize the internal game state
    GameWorld._instance = this;

    const { height, width } = document.getElementsByTagName("canvas")[0];
    const shipInstance = new Ship(ctx, width / 2, height / 2, 0, 0);
    this.ctx = ctx;

    GameWorld._instance.entities = [shipInstance];
    //TO-DO generate random spawn points for asteroid
    for (let i = 0; i < 5; i++) {
      GameWorld._instance.entities.push(
        new Asteroid(
          ctx,
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    setupControls(shipInstance, GameWorld);

    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");

    if (startButton) {
      startButton.addEventListener("click", () => {
        GameWorld._instance.isGameRunning = true;
        requestAnimationFrame(GameWorld._instance.requestGameAnimationFrame);
      });
    }

    if (stopButton) {
      stopButton.addEventListener("click", () => {
        GameWorld._instance.isGameRunning = false;
        GameWorld._instance.ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
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
    if (GameWorld._instance.isGameRunning !== true) {
      return;
    }

    calculatePhysics(GameWorld);

    //calculate nextMapFrame
    GameWorld._instance.drawMap();
    requestAnimationFrame(GameWorld._instance.requestGameAnimationFrame);
  }
}

const GameWorldSingleton = GameWorld.getInstance();
