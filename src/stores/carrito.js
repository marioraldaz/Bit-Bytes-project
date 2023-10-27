import { writable } from "svelte/store";
let visibility = false;

export default writable({
    visibility,
    carrito: []
});