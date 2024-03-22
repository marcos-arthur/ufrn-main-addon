import {
  world,
  system,
  BlockPermutation,
  EntityInventoryComponent,
  ItemStack,
  DisplaySlotId,
  Vector3,
  Player,
} from "@minecraft/server";

import inside_cell_dialogue from "./dialogues/quest_0/inside_cell_dialogue";

const START_TICK = 100;

const intialPrisonCoord: Vector3 = { x: 218, y: -8, z: 190 };

// global variables
let curTick = 0;

//Dialogues
const insideCellDialogue = {
  "rawtext":
  [
    {
      "text": "§uRádio Walk Talk: §rEi, você aí"
    },
    // selector not working
    {
      "selector": "@s"
    },
    {
      "text": "! \nÉ hora de escapar. Só siga o que eu disser e você vai sair dessa."
    },
  ]
}

const insideCellDialogue_1 = {
  "rawtext":
  [
    {
      "text": "§uRádio Walk Talk: §rNão importa quem eu sou no momento. \nO que importa é que você siga o que eu vou falar." 
    }
  ]
}

const insideCellDialogue_2 = {
  "rawtext":
  [
    {
      "text": "§uRádio Walk Talk: §rPrimeiro, estou hackeando a porta da sua cela. \nPorém só vou conseguir deixá-la aberta por um breve momento, \nme informe quando você estiver pronto para que eu possa abrir."
    }
  ]
}

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
        display_dialogue(insideCellDialogue, player)
      }
    }

    if (curTick === START_TICK) {
    }
  } catch (e) {
    console.warn("Tick error: " + e);
  }

  system.run(gameTick);
}

const display_dialogue = async (dialogue: object, player: Player) => {
  player.onScreenDisplay.setActionBar(insideCellDialogue);
  system.runTimeout(() => {
    player.onScreenDisplay.setActionBar(insideCellDialogue_1);
      system.runTimeout(() => {
        player.onScreenDisplay.setActionBar(insideCellDialogue_2);
      }, 20 * 5);
  }, 20 * 5);
  
  // await delay(3000);
  // await delay(3000);
} 

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

system.run(gameTick);
