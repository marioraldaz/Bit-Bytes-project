import { writable } from "svelte/store";
let usedComponents = [];

function getComponent(component) {}
export default writable({
  usedComponents,
});
