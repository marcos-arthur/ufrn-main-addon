import { Player } from "@minecraft/server";

export default class Q0001Dialogues {
  static afterEscapeDialogue(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§u${_player.name}: §rVAMOS!`,
          },
        ],
      },
    ];
  }
}
