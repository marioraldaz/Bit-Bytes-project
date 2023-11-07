import { writable } from "svelte/store";
let quantity = 1;
let productPrice = 0;
let shoppingCart = [];
function addToShoppingCart(product) {
  storeCarrito.update((data) => {
    let repetido = false;
    productPrice= product.price;

    for (var trel of data.shoppingCart) {
      if (trel.product.id === product.id) {
        trel.quantity++;
        trel.productPrice += product.price;  
        repetido = true;
      }
    }

    if (!repetido) {
      data.shoppingCart.push({ product, quantity, productPrice });
    }
    return data;
  });
}

const storeCarrito = writable({
  shoppingCart,
  quantity,
  productPrice,
  addToShoppingCart,
});
export default storeCarrito;
