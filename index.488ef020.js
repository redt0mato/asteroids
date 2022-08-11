var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var Entity = function() {
    function Entity() {}
    Entity.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Entity;
}();
var newEntityInstance = new Entity();
newEntityInstance.ctx = ctx;
newEntityInstance.x = 20;
newEntityInstance.y = 40;
newEntityInstance.width = 50;
newEntityInstance.height = 50;
newEntityInstance.draw();
var GameWorld = function() {
    function GameWorld() {
        if (GameWorld._instance) throw new Error("Error: Instantiation failed: Use GameWorld.getInstance() instead of new.");
        GameWorld._instance = this;
    }
    GameWorld.getInstance = function() {
        if (!GameWorld._instance) GameWorld._instance = new GameWorld();
        return GameWorld._instance;
    };
    GameWorld.prototype.updateGameLogic = function() {
        console.log("my logic!");
    };
    GameWorld.prototype.drawMap = function() {};
    GameWorld._instance = new GameWorld();
    return GameWorld;
}();
var GameWorldSingleton = GameWorld.getInstance();

//# sourceMappingURL=index.488ef020.js.map
