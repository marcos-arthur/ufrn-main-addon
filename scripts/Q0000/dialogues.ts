import { Player } from "@minecraft/server";

export default class Q0000Dialogues {
  static insideCellDialogue(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§uRádio Walk Talk: §rEi, ${_player.name}\nÉ hora de escapar. Só siga o que eu disser e você vai sair dessa.`,
          },
        ],
      },
      {
        rawtext: [
          {
            text: "§uRádio Walk Talk: §rNão importa quem eu sou no momento. \nO que importa é que você siga o que eu vou falar.",
          },
        ],
      },
      {
        rawtext: [
          {
            text: "§uRádio Walk Talk: §rPrimeiro, estou hackeando a porta da sua cela. \nPorém só vou conseguir deixá-la aberta por um breve momento.",
          },
        ],
      },
      {
        rawtext: [
          {
            text: "§uRádio Walk Talk: §rMe informe quando você estiver pronto para que eu possa abrir.",
          },
        ],
      },
    ];
  }

  static elevatorPitDialogue(_player: Player) {
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
  }
}
