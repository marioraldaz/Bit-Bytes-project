import { writable } from "svelte/store";
let cantity = 1;
let trelly = [];
function addToCarrito(product) {
  storeCarrito.update((data) => {
    let repetido = false;

    for (var car of data.trelly) {
      if (car.product.id === product.id) {
        car.cantity++;
        repetido = true;
      }
    }

    if (!repetido) {
      data.trelly.push({ product, cantity });
    }
    return data;
  });
}

const storeCarrito = writable({
  trelly,
  cantity,
  addToCarrito,
});
export default storeCarrito;
