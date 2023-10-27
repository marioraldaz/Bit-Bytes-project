import { writable } from "svelte/store";
let visibility = false;
let buyProducts = [];

export default writable({
    visibility,
    buyProducts
});