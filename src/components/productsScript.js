import products from "./products.json";

let arrayProducts = products.products;

export function getComponents(componentType) {
  let components = [];
  for (let product of arrayProducts) {
    if (product.type == componentType) {
      components.push(product);
    }
  }
  return components;
}
