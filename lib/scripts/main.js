import { world, system } from "@minecraft/server";
// import * as GameTest from "@minecraft/server-gametest";
import Quest0000 from "./Q0000/Q0000";
import Quest0001 from "./Q0001/Q0001";
const START_TICK = 100;
// global variables
let curTick = 0;
// world.afterEvents.playerSpawn.subscribe((eventData) => {
//   let { player, initialSpawn } = eventData;
//   if (!initialSpawn) return;
//   player.sendMessage(`your id is ${player.id}`);
// });
// GameTest.register("QuestTests", "Q0000", Quest0000.runQuest).maxTicks(100);
//20 ticks per second
function gameTick() {
    // try {
    if (system.currentTick > START_TICK && system.currentTick % 20 === 0) {
        Quest0000.runQuest();
        Quest0001.runQuest();
    }
    if (system.currentTick > START_TICK && system.currentTick % 60 === 0) {
        world.getAllPlayers();
    }
    if (curTick === START_TICK) {
    }
    // } catch (e) {
    //   console.warn("Tick error: " + e);
    // }
    // if (system.currentTick % 100 === 0) {
    //   world.sendMessage("Hello starter! Tick: " + system.currentTick);
    // }
    system.run(gameTick);
}
system.run(gameTick);
//# sourceMappingURL=main.js.map