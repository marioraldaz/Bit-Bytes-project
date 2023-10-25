import products from "./products.json";

let arrayProducts = products.products;

export function getRAMs() {
  let RAMs = [];
  for (let product of arrayProducts) {
    if (product.type == "RAM") {
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
