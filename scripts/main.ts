import { world, system } from "@minecraft/server";

import Quest0000 from "./Q0000/Q0000";
import Quest0001 from "./Q0001/Q0001";

const START_TICK = 100;

// global variables
let curTick = 0;

world.afterEvents.playerSpawn.subscribe((eventData) => {
  let { player, initialSpawn } = eventData;
  if (!initialSpawn) return;
});

//20 ticks per second
function gameTick() {
  try {
    curTick++;

    if (curTick > START_TICK && curTick % 20 === 0) {
      // Quest0000.runQuest();
      Quest0001.runQuest();
    }

    if (curTick === START_TICK) {
    }
  } catch (e) {
    console.warn("Tick error: " + e);
  }

  system.run(gameTick);
}

system.run(gameTick);
