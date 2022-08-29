import { DIRECTIONS } from "../objects/Entity";
export function setupControls(shipInstance, GameWorld) {
    document.onkeydown = function (event) {
        if (event.keyCode === 37) {
            shipInstance.power(DIRECTIONS.LEFT);
        }
        else if (event.keyCode === 38) {
            shipInstance.power(DIRECTIONS.UP);
        }
        else if (event.keyCode === 39) {
            shipInstance.power(DIRECTIONS.RIGHT);
        }
        else if (event.keyCode === 40) {
            shipInstance.power(DIRECTIONS.DOWN);
        }
        else if (event.keyCode === 32) {
            shipInstance.fireBullet(GameWorld);
        }
    };
}
//# sourceMappingURL=Controller.js.map