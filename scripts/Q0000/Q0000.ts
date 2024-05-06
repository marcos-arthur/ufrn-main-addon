import * as minecraft from "@minecraft/server";

export const Q0000 = (overworld: minecraft.Dimension) => {
  let players_q0001_05 = overworld.getEntities({
    location: { x: 248, y: -9, z: 150 },
    maxDistance: 2,
    tags: ["Q0000"],
    excludeTags: ["Q0000_05", "Q0000_06"],
  });
};
