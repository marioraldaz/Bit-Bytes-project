import { writable } from "svelte/store";
let cantidad = 1;
let carrito = [];
function addToCarrito(product) {
  storeCarrito.update((data) => {
    let repetido = false;

    for (var car of data.carrito) {
      if (car.product.id === product.id) {
        car.cantidad++;
        repetido = true;
      }
    }

    if (!repetido) {
      data.carrito.push({ product, cantidad });
    }
    return data;
  });
}

const storeCarrito = writable({
  carrito,
  cantidad,
  addToCarrito,
});
export default storeCarrito;
