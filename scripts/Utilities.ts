import { world, Dimension, RawMessage, Player, system, BlockPermutation, Vector3 } from "@minecraft/server";

export default class Utilities {
  static fillBlock(
    blockPerm: BlockPermutation,
    xFrom: number,
    yFrom: number,
    zFrom: number,
    xTo: number,
    yTo: number,
    zTo: number
  ) {
    const overworld = world.getDimension("overworld");

    for (let i = xFrom; i <= xTo; i++) {
      for (let j = yFrom; j <= yTo; j++) {
        for (let k = zFrom; k <= zTo; k++) {
          overworld.getBlock({ x: i, y: j, z: k })?.setPermutation(blockPerm);
        }
      }
    }
  }

  static fourWalls(
    perm: BlockPermutation,
    xFrom: number,
    yFrom: number,
    zFrom: number,
    xTo: number,
    yTo: number,
    zTo: number
  ) {
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

  static displayDialogue(_dialogue_list: Array<RawMessage>, _player: Player, _index: number) {
    if (_index === _dialogue_list.length) return;

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
  static async displayDialogueInit(_dialogue_list: Array<RawMessage>, _player: Player) {
    if (_dialogue_list.length === 0) return;

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
  static getPlayersInVolume(
    _location: Vector3,
    _maxDistance: number,
    _tags?: string[],
    _excludeTags?: string[]
  ): Player[] {
    let playersInVolume: Player[] = [];

    world
      .getDimension("overworld")
      .getEntities({
        location: _location,
        maxDistance: _maxDistance,
        tags: _tags,
        excludeTags: _excludeTags,
      })
      .forEach((_entity) => {
        // console.warn(_entity.nameTag + "\n");
        if (_entity.typeId === "minecraft:player") {
          playersInVolume.push(_entity as Player);
        }
      });

    // ItemStack;
    // MinecraftItemTypes.WritableBook;

    return playersInVolume;
  }
}
