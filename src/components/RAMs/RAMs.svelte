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
        <div class="gradiente_img_cabecera row">
          <img
            class="img_encabezado"
            src="imagenes/componentes_cabecera.png"
            alt="componentes"
          />
        </div>
        <h1>RAMS</h1>
        <ProductList products={RAMs}  />
    </div>

<style lang="scss">
h1{
    text-align: center;
    margin-bottom: 2rem;
}
</style>