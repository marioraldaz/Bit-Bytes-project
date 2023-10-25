import { writable } from "svelte/store";
let products = [];

export default writable({
   products,
});