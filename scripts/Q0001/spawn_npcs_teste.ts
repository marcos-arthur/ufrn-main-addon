// ! Script elaborado apenas para testar
import { system, Dimension, world } from "@minecraft/server";
const overworld: Dimension = world.getDimension("overworld");

//* Cria NPC
export function spawnNPC() {
  system.runTimeout(() => {
    let npcs = overworld.getEntitiesAtBlockLocation({ x: 386.5, y: -22, z: 176.5 });

    if (npcs.length < 1) {
      console.log("NPC não encontrado");
      overworld.spawnEntity("minecraft:npc", { x: 386.5, y: -22, z: 176.5 });

      npcs = overworld.getEntitiesAtBlockLocation({ x: 386.5, y: -22, z: 176.5 });
    }
    if (npcs[0].isValid()) {
      const npcSilva = npcs[0];
      npcSilva.runCommandAsync("dialogue change @s silva_scene");
      npcSilva.playAnimation("animation.npc.move");
      console.log("NPC encontrado ");
    }
  }, 200);
}
