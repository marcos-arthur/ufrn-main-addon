// ! Script elaborado apenas para testar
import { world } from "@minecraft/server";

let overworld = world.getDimension("overworld");

//! Not Working
//! let molang = new MolangVariableMap();
//! molang.setSpeedAndDirection("speed", 600, { x: 370, y: -22.0, z: 183 });

export class Paths {
  static Path0001_01() {
    const y_location = -21.91;
    const particles = [
      { x: 380.5, y: y_location, z: 188.5 },
      { x: 378.5, y: y_location, z: 190.5 },
      { x: 376.5, y: y_location, z: 192.5 },
      { x: 374.5, y: y_location, z: 194.5 },
      { x: 373.5, y: y_location, z: 196.5 },
      { x: 372.5, y: y_location, z: 198.5 },
      { x: 371.5, y: y_location, z: 200.5 },
      { x: 370.5, y: y_location, z: 202.5 },
      { x: 369.5, y: y_location, z: 204.5 },
      { x: 368.5, y: y_location, z: 206.5 },
      { x: 367.5, y: y_location, z: 208.5 },
      { x: 366.5, y: y_location, z: 210.5 },
      { x: 365.5, y: y_location, z: 212.5 },
      { x: 364.5, y: y_location, z: 214.5 },
      { x: 363.5, y: y_location, z: 216.5 },
      { x: 362.5, y: y_location, z: 218.5 },
      { x: 361.5, y: y_location, z: 220.5 },
      { x: 360.5, y: y_location, z: 222.5 },
      { x: 360.5, y: y_location, z: 224.5 },
      { x: 360.5, y: y_location, z: 226.5 },
      { x: 360.5, y: y_location, z: 228.5 },
      { x: 360.5, y: y_location, z: 230.5 },
      { x: 360.5, y: y_location, z: 232.5 },
      { x: 360.5, y: y_location, z: 234.5 },
      { x: 359.5, y: y_location, z: 236.5 },
      { x: 358.5, y: y_location, z: 238.5 },
      { x: 357.5, y: y_location, z: 240.5 },
      { x: 356.5, y: y_location, z: 242.5 },
      { x: 355.5, y: y_location, z: 244.5 },
      { x: 354.5, y: y_location, z: 246.5 },
      { x: 353.5, y: y_location, z: 248.5 },
      { x: 353.5, y: y_location, z: 250.5 },
      { x: 353.5, y: y_location, z: 252.5 },
      { x: 353.5, y: y_location, z: 254.5 },
      { x: 352.5, y: y_location, z: 256.5 },
      { x: 351.5, y: y_location, z: 258.5 },
      { x: 351.5, y: y_location, z: 260.5 },
      { x: 351.5, y: y_location, z: 262.5 },
      { x: 351.5, y: y_location, z: 264.5 },
      { x: 351.5, y: y_location, z: 266.5 },
      { x: 351.5, y: y_location, z: 268.5 },
      { x: 351.5, y: y_location, z: 270.5 },
      { x: 351.5, y: y_location, z: 272.5 },
      { x: 350.5, y: y_location, z: 274.5 },
      { x: 348.5, y: y_location, z: 275.5 },
      { x: 346.5, y: y_location, z: 275.5 },
      { x: 344.5, y: y_location, z: 275.5 },
      { x: 342.5, y: y_location, z: 275.5 },
    ];
    particles.forEach((particle) => overworld.spawnParticle("minecraft:endrod", particle));
  }
  static Path0001_04() {
    const particles = [
      { x: 339.5, y: -21.9, z: 275.5 },
      { x: 337.5, y: -22.9, z: 275.5 },
      { x: 335.5, y: -22.9, z: 273.5 },
      { x: 333.5, y: -22.9, z: 272.5 },
      { x: 331.5, y: -22.9, z: 272.5 },
      { x: 329.5, y: -22.9, z: 272.5 },
      { x: 327.5, y: -22.9, z: 272.5 },
      { x: 325.5, y: -22.9, z: 272.5 },
      { x: 323.5, y: -22.9, z: 272.5 },
      { x: 321.5, y: -22.9, z: 272.5 },
      { x: 319.5, y: -21.9, z: 272.5 },
      { x: 319.5, y: -20.9, z: 273.5 },
      { x: 319.5, y: -19.9, z: 274.5 },
      { x: 319.5, y: -18.9, z: 275.5 },
      { x: 319.5, y: -17.9, z: 276.5 },
      { x: 319.5, y: -16.9, z: 277.5 },
      { x: 319.5, y: -15.9, z: 278.5 },
      { x: 321.5, y: -15.9, z: 280.5 },
      { x: 323.5, y: -15.9, z: 282.5 },
      { x: 324.5, y: -15.9, z: 283.5 },
      { x: 326.5, y: -14.9, z: 283.5 },
      { x: 328.5, y: -14.9, z: 283.5 },
      { x: 328.5, y: -13.9, z: 284.5 },
      { x: 328.5, y: -13.9, z: 286.5 },
      { x: 328.5, y: -13.9, z: 288.5 },
      { x: 327.5, y: -13.9, z: 290.5 },
    ];
    particles.forEach((particle) => overworld.spawnParticle("minecraft:endrod", particle));
  }
}
