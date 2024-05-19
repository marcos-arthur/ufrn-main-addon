import { Player, system } from "@minecraft/server";

let player: Player;
export default class Q0001Dialogues {
  static radioDialogue01(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§u|| Rádio ||§r §bCombatente Wilson§r: Ei, §a${_player.name}§r\nSiga pelo corredor a esqueda da prisão para chegar no §6Relógio do Sol§r.`,
          },
        ],
      },
    ];
  }
  static radioDialogue02(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§u|| Rádio ||§r §bCombatente Wilson§r: Siga o caminho destacado.`,
          },
        ],
      },
    ];
  }
  static hintDialogue03(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§e|| Dica ||§r Interaja com o §bCombatente Smith§r\npara iniciar o Desafio.`,
          },
        ],
      },
    ];
  }
  static radioDialogue04(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§u|| Rádio ||§r §bCombatente Smith§r: Siga o caminho destacado e suba até o §6Relógio do Sol§r.`,
          },
        ],
      },
    ];
  }
  static hintDialogue05(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§e|| Dica ||§r Você precisa pular de bloco em bloco\npara chegar no topo.`,
          },
        ],
      },
    ];
  }
  static radioDialogue06(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§u|| Rádio ||§r §bCombatente Roberto§r: Ei, §a${_player.name}§r \neu estou aqui em cima.`,
          },
        ],
      },
    ];
  }
  static hintDialogue07(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§e|| Dica ||§r Interaja com o §bCombatente Roberto§r\npara iniciar o Desafio.`,
          },
        ],
      },
    ];
  }

  static radioDialogue08(_player: Player) {
    return [
      {
        rawtext: [
          {
            text: `§u|| Rádio ||§r §bCombatente Wilson§r: Diálogo 8.`,
          },
        ],
      },
    ];
  }
}
