import { writable } from "svelte/store";
let usedComponents = [];
import products from "../components/products.json";
let arrayProducts = products.products;

export function getComponents(component) {
  let array = [];
  for (let product of arrayProducts) {
    if (product.type == component) {
      array.push(product);
    }
  }
  return array;
}


export function calPrice(components) {
  let totalPrice = 0;
  for (let product of components) {
    totalPrice += product.price;
  }
  return totalPrice;
}

export function getProducts() {
  return arrayProducts;

}
export default writable({
  usedComponents,
})
