import products from "./products.json";

let arrayProducts = products.products;

export function getOffers() {
  let ofertas = [];
  for (let product of arrayProducts) {
    if (product.sale) {
      ofertas.push(product);
    }
  }
  return ofertas;
}
