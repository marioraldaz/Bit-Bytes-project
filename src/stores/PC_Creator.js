import { writable } from "svelte/store";
let usedComponents = [];
let open = false;

export default writable({
  usedComponents,
  open,
});
