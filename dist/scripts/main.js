// scripts/main.ts
import { world as world4, system as system2 } from "@minecraft/server";

// scripts/Q0000/Q0000.ts
import { world as world2 } from "@minecraft/server";

// scripts/Utilities.ts
import { world, system } from "@minecraft/server";
var Utilities = class {
  static fillBlock(blockPerm, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
    const overworld = world.getDimension("overworld");
    for (let i = xFrom; i <= xTo; i++) {
      for (let j = yFrom; j <= yTo; j++) {
        for (let k = zFrom; k <= zTo; k++) {
          overworld.getBlock({ x: i, y: j, z: k })?.setPermutation(blockPerm);
        }
      }
    }
  }
  static fourWalls(perm, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
    const overworld = world.getDimension("overworld");
    for (let i = xFrom; i <= xTo; i++) {
      for (let k = yFrom; k <= yTo; k++) {
        overworld.getBlock({ x: i, y: k, z: zFrom })?.setPermutation(perm);
        overworld.getBlock({ x: i, y: k, z: zTo })?.setPermutation(perm);
      }
    }
    for (let j = zFrom + 1; j < zTo; j++) {
      for (let k = yFrom; k <= yTo; k++) {
        overworld.getBlock({ x: xFrom, y: k, z: j })?.setPermutation(perm);
        overworld.getBlock({ x: xTo, y: k, z: j })?.setPermutation(perm);
      }
    }
  }
  static displayDialogue(_dialogue_list, _player, _index) {
    if (_index === _dialogue_list.length)
      return;
    system.runTimeout(() => {
      _player.onScreenDisplay.setActionBar(_dialogue_list[_index]);
      this.displayDialogue(_dialogue_list, _player, ++_index);
    }, 20 * 4);
  }
  /**
   * Exibe na tela do jogador um diálogo corrido.
   * Cada caixa de diálogo é um RawMessage na lista
   * @param _dialogue_list Lista com os diálogos
   * @param _player Jogador para o qual o diálogo será exibido
   * @returns void
   */
  static async displayDialogueInit(_dialogue_list, _player) {
    if (_dialogue_list.length === 0)
      return;
    _player.onScreenDisplay.setActionBar(_dialogue_list[0]);
    this.displayDialogue(_dialogue_list, _player, 1);
  }
  // const display_dialogue = (dialogue_list: Array<object>, player: Player, index: number) => {
  /**
   * Retorna uma lista com os jogadores dentro de um volume.
   * @param _location Coordenadas do centro do local no mundo para ser verificado
   * @param _maxDistante Raio de verificação
   * @param _tags Tags para inculir somente os jogadores que possuem elas
   * @param _excludeTags Tags para ignorar os jogadores que possuem elas
   * @returns Player[]
   */
  static getPlayersInVolume(_location, _maxDistance, _tags, _excludeTags) {
    let playersInVolume = [];
    world.getDimension("overworld").getEntities({
      location: _location,
      maxDistance: _maxDistance,
      tags: _tags,
      excludeTags: _excludeTags
    }).forEach((_entity) => {
      if (_entity.typeId === "minecraft:player") {
        playersInVolume.push(_entity);
      }
    });
    return playersInVolume;
  }
};

// scripts/Q0000/dialogues.ts
var Q0000Dialogues = class {
  static insideCellDialogue(_player) {
    return [
      {
        rawtext: [
          {
            text: `\xA7uR\xE1dio Walk Talk: \xA7rEi, ${_player.name}
\xC9 hora de escapar. S\xF3 siga o que eu disser e voc\xEA vai sair dessa.`
          }
        ]
      },
      {
        rawtext: [
          {
            text: "\xA7uR\xE1dio Walk Talk: \xA7rN\xE3o importa quem eu sou no momento. \nO que importa \xE9 que voc\xEA siga o que eu vou falar."
          }
        ]
      },
      {
        rawtext: [
          {
            text: "\xA7uR\xE1dio Walk Talk: \xA7rPrimeiro, estou hackeando a porta da sua cela. \nPor\xE9m s\xF3 vou conseguir deix\xE1-la aberta por um breve momento."
          }
        ]
      },
      {
        rawtext: [
          {
            text: "\xA7uR\xE1dio Walk Talk: \xA7rMe informe quando voc\xEA estiver pronto para que eu possa abrir."
          }
        ]
      }
    ];
  }
  static elevatorPitDialogue(_player) {
    return [
      {
        rawtext: [
          {
            text: `\xA7uR\xE1dio Walk Talk: \xA7rParab\xE9ns agora que voc\xEA conseguir chegar s\xE3o e salvo at\xE9 aqui.`
          }
        ]
      },
      {
        rawtext: [
          {
            text: "\xA7uR\xE1dio Walk Talk: \xA7rVamos continuar nosso progresso para sair dessa pris\xE3o."
          }
        ]
      },
      {
        rawtext: [
          {
            text: "\xA7uR\xE1dio Walk Talk: \xA7rEste local \xE9 o fosso do elevador. Veja que existe uma forma de escalar"
          }
        ]
      },
      {
        rawtext: [
          {
            text: "\xA7uR\xE1dio Walk Talk: \xA7rMas tenha cuidado para n\xE3o cair, este local \xE9 perigoso."
          }
        ]
      }
    ];
  }
};

// scripts/Q0000/Q0000.ts
var intialPrisonCoord = { x: 218, y: -8, z: 190 };
var Quest0000 = class {
  static runQuest() {
    world2.getPlayers({ excludeTags: ["wasImprisoned", "Q0000"] }).forEach((_player) => {
      _player.teleport(intialPrisonCoord, {
        facingLocation: { x: intialPrisonCoord.x + 3, y: intialPrisonCoord.y - 1, z: intialPrisonCoord.z }
      });
      _player.addTag("wasImprisoned");
      _player.addTag("Q0000");
    });
    world2.getPlayers({ tags: ["Q0000"], excludeTags: ["Q0000_01"] }).forEach((_player) => {
      _player.addTag("Q0000_01");
      Utilities.displayDialogueInit(Q0000Dialogues.insideCellDialogue(_player), _player);
    });
    Utilities.getPlayersInVolume({ x: 248, y: -9, z: 150 }, 2, ["Q0000"], ["Q0000_05", "Q0000_06"]).forEach(
      (player) => {
        player.addTag("Q0000_05");
      }
    );
    world2.getPlayers({ tags: ["Q0000_05"] }).forEach((player) => {
      player.removeTag("Q0000_05");
      player.addTag("Q0000_06");
      Utilities.displayDialogueInit(Q0000Dialogues.elevatorPitDialogue(player), player);
    });
  }
};

// scripts/Q0001/Q0001.ts
import { world as world3 } from "@minecraft/server";
var Quest0001 = class {
  static runQuest() {
    world3.getPlayers({ tags: ["Q0001_01"] }).forEach((player) => {
      player.removeTag("Q0001_01");
      player.addTag("Q0001_02");
    });
  }
};

// scripts/main.ts
var START_TICK = 100;
var curTick = 0;
function gameTick() {
  if (system2.currentTick > START_TICK && system2.currentTick % 20 === 0) {
    Quest0000.runQuest();
    Quest0001.runQuest();
  }
  if (system2.currentTick > START_TICK && system2.currentTick % 60 === 0) {
    world4.getAllPlayers();
  }
  if (curTick === START_TICK) {
  }
  system2.run(gameTick);
}
system2.run(gameTick);

//# sourceMappingURL=../debug/main.js.map
