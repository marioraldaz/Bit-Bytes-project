import { writable } from "svelte/store";
let cantidad = 0;

export default writable({
    carrito: []
});