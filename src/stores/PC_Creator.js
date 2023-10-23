import { writable } from "svelte/store";
let usedComponents = [];

export default writable({
  usedComponents,
});
