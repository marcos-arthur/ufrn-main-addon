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

    Utilities.getPlayersInVolume({ x: 248, y: -9, z: 150 }, 2, ["Q0000"], ["Q0000_05", "Q0000_06"]).forEach(
      (player) => {
        player.addTag("Q0000_05");
      }
    );

    world.getPlayers({ tags: ["Q0000_05"] }).forEach((player) => {
      player.removeTag("Q0000_05");
      player.addTag("Q0000_06");
      Utilities.displayDialogueInit(Q0000Dialogues.elevatorPitDialogue(player), player);
    });
  }
}
