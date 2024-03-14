import {
  world,
  system,
  BlockPermutation,
  EntityInventoryComponent,
  ItemStack,
  DisplaySlotId,
  Vector3,
} from "@minecraft/server";

const START_TICK = 100;

const intialPrisonCoord: Vector3 = { x: 218, y: -8, z: 190 };

// global variables
let curTick = 0;

function gameTick() {
  try {
    curTick++;

    if (curTick > START_TICK && curTick % 20 === 0) {
      let noobs = world.getPlayers({ excludeTags: ["wasImprisoned"] });

      for (let noobPlayer of noobs) {
        noobPlayer.teleport(intialPrisonCoord, {
          facingLocation: { x: intialPrisonCoord.x + 3, y: intialPrisonCoord.y - 1, z: intialPrisonCoord.z },
        });
        noobPlayer.addTag("wasImprisoned");
      }
      // let inv = player.getComponent("inventory") as EntityInventoryComponent;
      // inv.container.addItem(new ItemStack("diamond_sword"));
      // inv.container.addItem(new ItemStack("dirt", 64));
    }

    if (curTick === START_TICK) {
    }
  } catch (e) {
    console.warn("Tick error: " + e);
  }

  system.run(gameTick);
}

system.run(gameTick);
