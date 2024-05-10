import { world, BlockPermutation, RawMessage, Player, system } from "@minecraft/server";

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

  static async displayDialogueInit(_dialogue_list: Array<RawMessage>, _player: Player) {
    if (_dialogue_list.length === 0) return;

    _player.onScreenDisplay.setActionBar(_dialogue_list[0]);
    this.displayDialogue(_dialogue_list, _player, 1);
  }

  // const display_dialogue = (dialogue_list: Array<object>, player: Player, index: number) => {
}
