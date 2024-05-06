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
import { getElevatorPitDialogue } from "./dialogues/quest_0/elevator_pit_dialogue";
import { getAfterEscapeDialogue } from "./dialogues/Q0002/after_escape_dialogue";

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
      let noobs = world.getPlayers({ excludeTags: ["wasImprisoned", "Q0000"] });
      for (let noobPlayer of noobs) {
        noobPlayer.teleport(intialPrisonCoord, {
          facingLocation: { x: intialPrisonCoord.x + 3, y: intialPrisonCoord.y - 1, z: intialPrisonCoord.z },
        });
        noobPlayer.addTag("wasImprisoned");
        noobPlayer.addTag("Q0000");
      }
      // let inv = player.getComponent("inventory") as EntityInventoryComponent;
      // inv.container.addItem(new ItemStack("diamond_sword"));
      // inv.container.addItem(new ItemStack("dirt", 64));

      // world.sendMessage("updated");
      // Check for stuff in Quest 0001
      // Player;
      // console.warn(players_q0001_05);
      // console.log(overworld.getBlock({ x: 248, y: -9, z: 150 })?.permutation.matches("minecraft:player"));

      let A1 = world.getAllPlayers();
      let A2 = A1[0].getTags();

      // Pegar informações de jogadores dentro de um espaço
      let players_q0001_05 = overworld.getEntities({
        location: { x: 248, y: -9, z: 150 },
        maxDistance: 2,
        tags: ["Q0000"],
        excludeTags: ["Q0000_05", "Q0000_06"],
      });

      console.warn("is player");
      players_q0001_05.forEach((_entity) => {
        console.warn(_entity.nameTag);
        if (_entity.typeId === "minecraft:player") {
          // console.warn("is_player");
          _entity.addTag("Q0000_05");
        }
      });
    }

    if (curTick > START_TICK && curTick % 60 === 0) {
      let players = world.getPlayers({ tags: ["can_escape"], excludeTags: ["reading_dialogue_quest_0_1"] });
      for (let player of players) {
        // world.sendMessage(player.name);
        player.addTag("reading_dialogue_quest_0_1");
        display_dialogue_list(getInsideCellDialogue(player), player);
      }

      world.getPlayers({ tags: ["Q0000_05"] }).forEach((player) => {
        player.removeTag("Q0000_05");
        player.addTag("Q0000_06");
        display_dialogue_list(getElevatorPitDialogue(player), player);
      });

      world.getPlayers({ tags: ["Q0001_01"] }).forEach((player) => {
        player.removeTag("Q0001_01");
        player.addTag("Q0001_02");
        display_dialogue_list(getAfterEscapeDialogue(player), player);
      });

      // Code bellow has bad performance
      // Instead, prefer to check the key positions and get the players inside them
      // then check the necessary tags

      // let players_q0001 = world.getPlayers({tags: ["Q0001"]})
      // players_q0001.forEach((player) =>{
      //   if(player.hasTag("Q0001_04")){
      //     //check position of player
      //     //start dialogue
      //     //add Q0001_05 status quest tag
      //   }

      //   if(player.hasTag("Q0001_05")){
      //     //start dialogue
      //   }
      // })
    }

    if (curTick === START_TICK) {
    }
  } catch (e) {
    console.warn("Tick error: " + e);
  }

  system.run(gameTick);
}

const display_dialogue_list = async (dialogue_list: Array<RawMessage>, player: Player) => {
  if (dialogue_list.length === 0) return;

  player.onScreenDisplay.setActionBar(dialogue_list[0]);
  display_dialogue(dialogue_list, player, 1);
};

const display_dialogue = (dialogue_list: Array<object>, player: Player, index: number) => {
  if (index === dialogue_list.length) return;

  system.runTimeout(() => {
    player.onScreenDisplay.setActionBar(dialogue_list[index]);
    display_dialogue(dialogue_list, player, ++index);
  }, 20 * 4);
};

system.run(gameTick);
