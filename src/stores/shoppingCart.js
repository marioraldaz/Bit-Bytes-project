import { writable } from "svelte/store";
let quantity = 1;
let productPrice = 0;
let shoppingCart = [];
function addToShoppingCart(product) {
  storeCarrito.update((data) => {
    let repetido = false;
    productPrice= product.price;

    for (var car of data.shoppingCart) {
      if (car.product.id === product.id) {
        car.quantity++;
        car.productPrice += product.price;  
        repetido = true;
      }
    }

    if (!repetido) {
      data.shoppingCart.push({ product, quantity, productPrice });
    }
    return data;
  });
}

function removeFromShoppingCart(product) {
  storeCarrito.update((data) => {
    productPrice= product.price;
    
    for (var car of data.shoppingCart) {
      if (car.product.id === product.id) {
        if(car.quantity > 0){
          car.quantity--;
          car.productPrice -= product.price;  
        }
        if(car.quantity == 0){
          data.shoppingCart = data.shoppingCart.filter(elem => elem.product.id != product.id);
        }
      }
    }

    return data;
  });
}

const storeCarrito = writable({
  shoppingCart,
  quantity,
  productPrice,
  addToShoppingCart,
  removeFromShoppingCart
});
export default storeCarrito;
