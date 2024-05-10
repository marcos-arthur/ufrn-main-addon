import { Player } from "@minecraft/server";

let player: Player;
export default class Q0001Dialogues {
  static afterEscapeDialogue(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§uRádio Comandante Wilson: §rEi, ${player.name}\nSiga pelo corredor a esqueda da prisão para chegar no §uRelógio do Sol§r.`,
          },
        ],
      },
    ];
  }
}
