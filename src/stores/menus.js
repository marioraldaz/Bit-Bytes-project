import { writable } from "svelte/store";

var RAMs = { name: "RAMs", logo: "src/stores/images/RAM.png" };
var MotherBoards = {
  name: "MotherBoards",
  logo: "src/stores/images/MotherBoard.png",
};
var CPUs = { name: "CPUs", logo: "src/stores/images/CPU.png" };
var HardDisks = { name: "Hard Disks", logo: "src/stores/images/SSD.png" };
var Graphics = { name: "Graphics", logo: "src/stores/images/GPU.png" };
var Body = { name: "Body" };
var PC_Creator = {
  name: "PC_Creator",
  logo: "src/stores/images/PC_Creator.png",
};
var Results = { name: "Results" };

const menus = [
  Body,
  RAMs,
  MotherBoards,
  CPUs,
  HardDisks,
  Graphics,
  PC_Creator,
  Results,
];
const active = "Body";

export default writable({
  menus,
  active,
});
