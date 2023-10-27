import products from "./products.json";

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

export function getOffers() {
  let ofertas = [];
  for (let product of arrayProducts) {
    if (product.sale) {
      ofertas.push(product);
    }
  }
  return ofertas;
}
