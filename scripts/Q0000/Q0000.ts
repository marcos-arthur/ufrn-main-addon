import { world, Vector3, Dimension } from "@minecraft/server";
import Utilities from "../Utilities";
import Q0000Dialogues from "./dialogues";

const overworld: Dimension = world.getDimension("overworld");

const intialPrisonCoord: Vector3 = { x: 218, y: -8, z: 190 };

export default class Quest0000 {
  static runQuest() {
    world.getPlayers({ excludeTags: ["wasImprisoned", "Q0000"] }).forEach((_player) => {
      _player.teleport(intialPrisonCoord, {
        facingLocation: { x: intialPrisonCoord.x + 3, y: intialPrisonCoord.y - 1, z: intialPrisonCoord.z },
      });
      _player.addTag("wasImprisoned");
      _player.addTag("Q0000");
    });

    world.getPlayers({ tags: ["Q0000"], excludeTags: ["Q0000_01"] }).forEach((_player) => {
      _player.addTag("Q0000_01");
      Utilities.displayDialogueInit(Q0000Dialogues.insideCellDialogue(_player), _player);
    });

    // Pegar informações de jogadores dentro de um espaço

    // world
    //   .getPlayers({
    //     location: { x: 248, y: -9, z: 150 },
    //     maxDistance: 2,
    //     tags: ["Q0000"],
    //     excludeTags: ["Q0000_05", "Q0000_06"],
    //   })
    //   .forEach((_player) => {
    //     _player.addTag("Q0000_5");
    //   });

    // Pegar informações de jogadores dentro de um espaço
    let players_q0001_05 = overworld.getEntities({
      location: { x: 248, y: -9, z: 150 },
      maxDistance: 2,
      tags: ["Q0000"],
      excludeTags: ["Q0000_05", "Q0000_06"],
    });

    players_q0001_05.forEach((_entity) => {
      console.warn(_entity.nameTag);
      if (_entity.typeId === "minecraft:player") {
        // console.warn("is_player");
        _entity.addTag("Q0000_05");
      }
    });

    world.getPlayers({ tags: ["Q0000_05"] }).forEach((player) => {
      player.removeTag("Q0000_05");
      player.addTag("Q0000_06");
      Utilities.displayDialogueInit(Q0000Dialogues.elevatorPitDialogue(player), player);
    });
  }
}
