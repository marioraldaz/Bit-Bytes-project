import { writable } from "svelte/store";

var RAMs = { name: "RAMs", logo: "logo" };
var MotherBoards = { name: "MotherBoards", logo: "logo" };
var CPUs = { name: "CPUs", logo: "logo" };
var Body = { name: "Body" };
const menus = [Body, RAMs, MotherBoards, CPUs];
const active = "Body";

export default writable({
  menus,
  active,
});
