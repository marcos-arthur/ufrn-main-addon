import { Player } from "@minecraft/server";

let player: Player;

export const getElevatorPitDialogue = (_player: Player) => {
  player = _player;

  return [
    {
      rawtext: [
        {
          text: `§uRádio Walk Talk: §rParabéns agora que você conseguir chegar são e salvo até aqui.`,
        },
      ],
    },
    {
      rawtext: [
        {
          text: "§uRádio Walk Talk: §rVamos continuar nosso progresso para sair dessa prisão.",
        },
      ],
    },
    {
      rawtext: [
        {
          text: "§uRádio Walk Talk: §rEste local é o fosso do elevador. Veja que existe uma forma de escalar",
        },
      ],
    },
    {
      rawtext: [
        {
          text: "§uRádio Walk Talk: §rMas tenha cuidado para não cair, este local é perigoso.",
        },
      ],
    },
  ];
};
