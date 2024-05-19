import { system, world } from "@minecraft/server";
import Utilities from "../Utilities";
import Q0001Dialogues from "./dialogues";
import { Paths } from "./paths";

const overworld = world.getDimension("overworld");
//* Cria NPC
system.runTimeout(() => {
  let npcs = overworld.getEntitiesAtBlockLocation({ x: 386.5, y: -22, z: 176.5 });

  if (npcs.length < 1) {
    console.log("NPC não encontrado");
    overworld.spawnEntity("minecraft:npc", { x: 386.5, y: -22, z: 176.5 });
    npcs = overworld.getEntitiesAtBlockLocation({ x: 386.5, y: -22, z: 176.5 });
  }
  if (npcs[0].isValid()) {
    const npcSilva = npcs[0];
    npcSilva.runCommandAsync("dialogue change @e[type=npc, r=2] wilson_scene @a");
    npcSilva.playAnimation("animation.npc.move");
    console.log("NPC encontrado ");
  }
}, 200);

export default class Quest0001 {
  static runQuest() {
    //* Cria o caminhos da Quest
    world.getPlayers({ tags: ["PATH_0001_01"] }).forEach((player) => {
      Paths.Path0001_01();
    });
    world.getPlayers({ tags: ["PATH_0001_04"] }).forEach((player) => {
      Paths.Path0001_04();
    });

    //* Quest Início da Quest
    // Quest 001 - 01
    overworld
      .getPlayers({ location: { x: 382.5, y: -22, z: 186.5 }, maxDistance: 4, tags: ["Q0001_01"] })
      .forEach((player) => {
        player.addTag("PATH_0001_01");
        Utilities.displayDialogueInit(Q0001Dialogues.radioDialogue01(player), player);
      });

    // Quest 001 - 02
    overworld
      .getPlayers({ location: { x: 368.5, y: -22, z: 207.5 }, maxDistance: 2, tags: ["Q0001_01"] })
      .forEach((_player) => {
        _player.addTag("Q0001_02");
        Utilities.displayDialogueInit(Q0001Dialogues.radioDialogue02(_player), _player);
        _player.removeTag("Q0001_01");
      });

    // Quest 001 - 03
    overworld
      .getPlayers({ location: { x: 342.5, y: -22, z: 275.5 }, maxDistance: 2, tags: ["Q0001_02", "Q0001_01"] })
      .forEach((_player) => {
        _player.addTag("Q0001_03");
        Utilities.displayDialogueInit(Q0001Dialogues.hintDialogue03(_player), _player);
        _player.removeTag("Q0001_02");
      });

    // Quest 001 - 04
    overworld
      .getPlayers({ location: { x: 341.5, y: -22, z: 275.5 }, maxDistance: 4, tags: ["Q0001_04"] })
      .forEach((_player) => {
        _player.removeTag("Q0001_03");
        _player.removeTag("PATH_0001_01");
        Utilities.displayDialogueInit(Q0001Dialogues.radioDialogue04(_player), _player);
        _player.addTag("PATH_0001_04");
      });

    // Quest 001 - 05
    overworld
      .getPlayers({ location: { x: 320.5, y: -23, z: 271.5 }, maxDistance: 2, tags: ["Q0001_04"] })
      .forEach((_player) => {
        _player.addTag("Q0001_05");
        Utilities.displayDialogueInit(Q0001Dialogues.hintDialogue05(_player), _player);
        _player.removeTag("Q0001_04");
      });

    // Quest 001 - 06
    overworld
      .getPlayers({ location: { x: 319.5, y: -16, z: 278.5 }, maxDistance: 2, tags: ["Q0001_05"] })
      .forEach((_player) => {
        _player.addTag("Q0001_06");
        Utilities.displayDialogueInit(Q0001Dialogues.radioDialogue06(_player), _player);
        _player.removeTag("Q0001_05");
      });

    // Quest 001 - 07
    overworld
      .getPlayers({ location: { x: 327.5, y: -14, z: 290.5 }, maxDistance: 2, tags: ["Q0001_06"] })
      .forEach((_player) => {
        _player.addTag("Q0001_07");
        Utilities.displayDialogueInit(Q0001Dialogues.hintDialogue07(_player), _player);
        _player.removeTag("Q0001_06");
      });

    // Quest 001 - 08
    overworld
      .getPlayers({ location: { x: 327.5, y: -14, z: 290.5 }, maxDistance: 2, tags: ["Q0001_07"] })
      .forEach((_player) => {
        _player.removeTag("PATH_0001_04");
        Utilities.displayDialogueInit(Q0001Dialogues.radioDialogue08(_player), _player);
        _player.removeTag("Q0001_07");
      });

    // Quest 001 - 09
    overworld.getPlayers({ tags: ["Q0001_08"] }).forEach((_player) => {
      _player.teleport({ x: 317.5, y: -13, z: 286.5 });
      _player.addTag("Q0001_09");
      // Utilities.displayDialogueInit(Q0001Dialogues.hintDialogue09(_player), _player);
      _player.removeTag("Q0001_08");
    });
  }
}
