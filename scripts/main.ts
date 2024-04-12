import {
  world,
  system,
  BlockPermutation,
  EntityInventoryComponent,
  ItemStack,
  DisplaySlotId,
  Vector3,
  Player,
  RawMessage,
} from "@minecraft/server";

import { getInsideCellDialogue } from "./dialogues/quest_0/inside_cell_dialogue";

const START_TICK = 100;
const overworld = world.getDimension("overworld");

const intialPrisonCoord: Vector3 = { x: 218, y: -8, z: 190 };

// global variables
let curTick = 0;

world.afterEvents.playerSpawn.subscribe((eventData) => {
  let { player, initialSpawn } = eventData;
  if (!initialSpawn) return;

  // world.sendMessage(`${player.name} first spawn!!`)
  // This runs when the player joins the game for the first time!
});

//20 ticks per second
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
    
    if (curTick > START_TICK && curTick % 60 === 0){
      let players = world.getPlayers({ tags: ["can_escape"], excludeTags: ["reading_dialogue_quest_0_1"]});
      for (let player of players) {
        // world.sendMessage(player.name);
        player.addTag("reading_dialogue_quest_0_1");
        display_dialogue_list(getInsideCellDialogue(player), player)
      }
    }

    if (curTick === START_TICK) {
    }
  } catch (e) {
    console.warn("Tick error: " + e);
  }

  system.run(gameTick);
}

const display_dialogue_list = async (dialogue_list: Array<RawMessage>, player: Player) => {
  if(dialogue_list.length === 0) return;

  player.onScreenDisplay.setActionBar(dialogue_list[0]);
  display_dialogue(dialogue_list, player, 1)
} 

const display_dialogue = (dialogue_list: Array<object>, player: Player, index: number) =>{
  if(index === dialogue_list.length) return;

  system.runTimeout(() => {
    player.onScreenDisplay.setActionBar(dialogue_list[index]);
    display_dialogue(dialogue_list, player, ++index);
  }, 20*4)
}

system.run(gameTick);
