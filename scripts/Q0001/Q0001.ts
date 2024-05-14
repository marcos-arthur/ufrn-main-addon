import { world, Dimension } from "@minecraft/server";
import Utilities from "../Utilities";
import Q0001Dialogues from "./dialogues";
import { Paths } from "./paths";

const overworld: Dimension = world.getDimension("overworld");
export default class Quest0001 {
  static runQuest() {
    //* Cria o caminhos da primeira quest
    world.getPlayers({ tags: ["PATH_0001_01"] }).forEach((player) => {
      console.log(`${player.name} Esta no Path Q0001_01`);
      Paths.Path0001_01();
    });
    world.getPlayers({ tags: ["PATH_0001_04"] }).forEach((player) => {
      console.log(`${player.name} Esta no Path Q0001_04`);
      Paths.Path0001_04();
    });

    //* Quest Início da Quest
    //* Quest 001 - 01
    world.getPlayers({ tags: ["Q0001_01"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_01`);
      // player.removeTag("Q0001_01");

      player.addTag("PATH_0001_01");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_01(player), player);

      // player.addTag("Q0001_02");
    });

    //* Quest 001 - 02
    let players_q0001_02 = overworld.getEntities({
      location: { x: 368.5, y: -22, z: 207.5 },
      maxDistance: 2,
      tags: ["Q0001_01"],
      excludeTags: ["Q0001_03, Q0001_04, Q0001_05, Q0001_06, Q0001_07, Q0001_08"],
    });

    players_q0001_02.forEach((_entity) => {
      // console.warn(_entity.nameTag);
      if (_entity.typeId === "minecraft:player") {
        _entity.addTag("Q0001_02");
      }
    });

    world.getPlayers({ tags: ["Q0001_02"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_02`);
      player.removeTag("Q0001_01");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_02(player), player);
    });

    //* Quest 001 - 03
    let players_q0001_03 = overworld.getEntities({
      location: { x: 353.5, y: -22, z: 253.5 },
      maxDistance: 2,
      tags: ["Q0001_02"],
      excludeTags: [" Q0001_03, Q0001_04, Q0001_05"],
    });
    players_q0001_03.forEach((_entity) => {
      // console.warn(_entity.nameTag);
      if (_entity.typeId === "minecraft:player") {
        _entity.addTag("Q0001_03");
      }
    });
    world.getPlayers({ tags: ["Q0001_03"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_03`);
      player.removeTag("Q0001_02");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_03(player), player);
    });

    //* Quest 001 - 04
    world.getPlayers({ tags: ["Q0001_04"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_04`);
      player.removeTag("Q0001_03");
      player.removeTag("PATH_0001_01");
      player.addTag("PATH_0001_04");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_04(player), player);
    });

    //* Quest 001 - 05
    let players_q0001_05 = overworld.getEntities({
      location: { x: 320.5, y: -23, z: 271.5 },
      maxDistance: 2,
      tags: ["Q0001_04"],
      excludeTags: ["Q0001_01, Q0001_02, Q0001_03, Q0001_05"],
    });

    players_q0001_05.forEach((_entity) => {
      // console.warn(_entity.nameTag);
      if (_entity.typeId === "minecraft:player") {
        _entity.addTag("Q0001_05");
      }
    });

    world.getPlayers({ tags: ["Q0001_05"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_05`);
      player.removeTag("Q0001_04");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_05(player), player);
    });

    // Quest 001 - 06
    let players_q0001_06 = overworld.getEntities({
      location: { x: 319.5, y: -16, z: 278.5 },
      maxDistance: 2,
      tags: ["Q0001_05"],
      excludeTags: ["Q0001_01, Q0001_02, Q0001_03, Q0001_04, Q0001_06"],
    });

    players_q0001_06.forEach((_entity) => {
      // console.warn(_entity.nameTag);
      if (_entity.typeId === "minecraft:player") {
        _entity.addTag("Q0001_06");
      }
    });

    world.getPlayers({ tags: ["Q0001_06"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_06`);
      player.removeTag("Q0001_05");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_06(player), player);
    });

    // Quest 001 - 07
    let players_q0001_07 = overworld.getEntities({
      location: { x: 327.5, y: -14, z: 290.5 },
      maxDistance: 2,
      tags: ["Q0001_06"],
      excludeTags: ["Q0001_01, Q0001_02, Q0001_03, Q0001_04, Q0001_05, Q0001_07"],
    });

    players_q0001_07.forEach((_entity) => {
      // console.warn(_entity.nameTag);
      if (_entity.typeId === "minecraft:player") {
        _entity.addTag("Q0001_07");
      }
    });

    world.getPlayers({ tags: ["Q0001_07"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_07`);
      player.removeTag("Q0001_06");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_07(player), player);
    });

    // Quest 001 - 08
    let players_q0001_08 = overworld.getEntities({
      location: { x: 327.5, y: -14, z: 290.5 },
      maxDistance: 2,
      tags: ["Q0001_08"],
      excludeTags: ["Q0001_01, Q0001_02, Q0001_03, Q0001_04, Q0001_05, Q0001_07, Q0001_08, Q0001_09"],
    });

    players_q0001_08.forEach((_entity) => {
      // console.warn(_entity.nameTag);
      if (_entity.typeId === "minecraft:player") {
        _entity.addTag("Q0001_08");
      }
    });

    world.getPlayers({ tags: ["Q0001_08"] }).forEach((player) => {
      console.log(`${player.name} Esta na etapa Q0001_08`);
      player.removeTag("Q0001_07");
      player.removeTag("PATH_0001_04");
      Utilities.displayDialogueInit(Q0001Dialogues.Dialogue_08(player), player);
      // TODO Adicionar FacingLocation?
    });

    // Quest 001 - 09
    world.getPlayers({ tags: ["Q0001_08"] }).forEach((_player) => {
      _player.teleport({ x: 317.5, y: -13, z: 286.5 });
      _player.removeTag("Q0001_08");
    });
  }
}
