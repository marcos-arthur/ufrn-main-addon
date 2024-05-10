import { world, Vector3 } from "@minecraft/server";
import Utilities from "../Utilities";
import Q0000Dialogues from "./dialogues";
import Q0001Dialogues from "./dialogues";

export default class Quest0001 {
  static runQuest() {
    world.getPlayers({ tags: ["Q0001_01"] }).forEach((player) => {
      player.removeTag("Q0001_01");
      player.addTag("Q0001_02");
      Utilities.displayDialogueInit(Q0001Dialogues.afterEscapeDialogue(player), player);
    });
  }
}
