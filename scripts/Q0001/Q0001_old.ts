import * as minecraft from "@minecraft/server";
import { Player, RawMessage, system } from "@minecraft/server";
// import { getInitialDialogue } from "./dialogues/initial_dialogue";

export const Q0001 = (overworld: minecraft.Dimension) => {
  let players_q0001_01 = overworld.getEntities({
    location: { x: 381.5, y: -22, z: 185.5 },
    maxDistance: 2,
    tags: ["Q0001"],
    excludeTags: ["Q0001_02, Q0001_03"],
  });

  players_q0001_01.forEach((_entity) => {
    console.warn(_entity.nameTag);
    if (_entity.typeId === "minecraft:player") {
      _entity.addTag("Q0001_01");
    }
  });
};

export const Q0001Dialogues = (overworld: minecraft.Dimension) => {
  //* Diálogos que aparecem diretamente para o jogador
  let players = overworld.getPlayers({ tags: ["Q0001_02"], excludeTags: ["Q0001, Q0001_01, Q0001_03"] });
  for (let player of players) {
    // world.sendMessage(player.name);
    player.removeTag("Q0000_02");
    player.addTag("Q0001_03");
    display_dialogue_list(getInitialDialogue(player), player);
    console.log("player: " + player.name);
  }

  overworld.getPlayers({ tags: ["Q0000_03"] }).forEach((player) => {
    player.removeTag("Q0000_03");
    player.addTag("Q0000_04");
    display_dialogue_list(getInitialDialogue(player), player);
  });

  overworld.getPlayers({ tags: ["Q0001_04"] }).forEach((player) => {
    player.removeTag("Q0001_04");
    player.addTag("Q0001_05");
    display_dialogue_list(getInitialDialogue(player), player);
  });
};
// TODO: Remover e adicionar em um método separado
const display_dialogue_list = async (dialogue_list: Array<RawMessage>, player: Player) => {
  if (dialogue_list.length === 0) return;

  player.onScreenDisplay.setActionBar(dialogue_list[0]);
  display_dialogue(dialogue_list, player, 1);
};

const display_dialogue = (dialogue_list: Array<object>, player: Player, index: number) => {
  if (index === dialogue_list.length) return;

  system.runTimeout(() => {
    player.onScreenDisplay.setActionBar(dialogue_list[index]);
    display_dialogue(dialogue_list, player, ++index);
  }, 20 * 4);
};
