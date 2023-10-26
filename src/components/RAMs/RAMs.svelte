<script>
    import {getComponent} from   "../productsScript";
    import ProductList from "../../body/ProductList.svelte";
</script>
    <div class="cuerpo">
        <div class="gradiente_img_cabecera row">
        </div>
        <h1 class="title">RAMS</h1>
        <ProductList products={getComponent("RAM")}  />
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