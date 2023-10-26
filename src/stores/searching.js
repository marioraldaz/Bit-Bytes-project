import { writable } from "svelte/store";
let searched ="";
let active = false;

export default writable({
  searched,
  active
});
