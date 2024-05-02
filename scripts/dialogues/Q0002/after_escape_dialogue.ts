import { Player } from "@minecraft/server";

export const getAfterEscapeDialogue = (_player: Player) => {
  return [
    {
      rawtext: [
        {
          text: `§u${_player.name}: §rVAMOS!`,
        },
      ],
    },
  ];
};
