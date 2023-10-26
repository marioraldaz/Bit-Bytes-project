import products from "./products.json";

let arrayProducts = products.products;

export function getComponent(component) {
  let RAMs = [];
  for (let product of arrayProducts) {
    if (product.type == component) {
      RAMs.push(product);
    }
  }
  return RAMs;
}

export function getOffers() {
  let ofertas = [];
  for (let product of arrayProducts) {
    if (product.oferta) {
      ofertas.push(product);
    }
  }
  return ofertas;
}
