<script>
    import Product from "../../body/Product.svelte";
/*   import ProductList from "../../body/ProductList.svelte";
 */    /* import RAMs from "./RAMs.json";
    let arrayRams = RAMs.RAMs; */
    import ProductList from "../../body/ProductList.svelte";
    console.log("Product");
    import {RAMs} from './RAMs.json';

</script>
    <div class="cuerpo">
        <h1 class="title">RAMS</h1>
        <ProductList products={RAMs}  />
    </div>

<style lang="scss">
.title{
      font-size: 5rem;
      text-align: center;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    .cuerpo{
  position: relative;
  margin-top: 9rem;
}
</style>