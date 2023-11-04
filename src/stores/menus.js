import { writable } from "svelte/store";

var RAMs = { name: "RAMs", logo: "src/stores/images/RAM.png" };
var MotherBoards = {
  name: "Motherboards",
  logo: "src/stores/images/MotherBoard.png",
};
var CPUs = { name: "CPUs", logo: "src/stores/images/CPU.png" };
var SSDs = { name: "SSDs", logo: "src/stores/images/SSD.png" };
var GPUs = { name: "GPUs", logo: "src/stores/images/GPU.png" };
var Body = { name: "Body" };
var PC_Creator = {
  name: "PC Creator",
  logo: "src/stores/images/PC_Creator_logo.png",
};
const menus = [Body, RAMs, MotherBoards, CPUs, SSDs, GPUs, PC_Creator];
const active = "Body";

export default writable({
  menus,
  active,
});
