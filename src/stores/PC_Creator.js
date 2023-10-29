import { writable } from "svelte/store";
let usedComponents = [];
import products from "../components/products.json";
let arrayProducts = products.products;
let totalPrice = 0;

export function getComponent(componentID) {
  for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].id == componentID) {
      return arrayProducts[i];
    }
  }
}

export function getComponents(component) {
  let array = [];
  for (let product of arrayProducts) {
    if (product.type == component) {
      array.push(product);
    }
  }
  return array;
}

export function calPrice() {
  let totalPrice = 0;
  for (let product of usedComponents) {
    totalPrice += product.price;
  }
  return totalPrice;
}

export default writable({
  usedComponents,
  totalPrice,
});
