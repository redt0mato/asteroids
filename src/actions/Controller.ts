/**
 * Using this file to process input streams from keyboard and/or mouse
 * We only handle up/down/left/right arrows and spacebars atm.
 *
 */

import { DIRECTIONS } from "../objects/entity";

export function setupControls(shipInstance) {
  document.onkeydown = function(event) {
    if(event.keyCode === 37) {
      shipInstance.power(DIRECTIONS.LEFT);
    } else if(event.keyCode === 38) {
      shipInstance.power(DIRECTIONS.UP);
    } else if (event.keyCode === 39) {
      shipInstance.power(DIRECTIONS.RIGHT);
    } else if(event.keyCode === 40) {
      shipInstance.power(DIRECTIONS.DOWN);
    }
  }
}

//32 is spacebar keycode