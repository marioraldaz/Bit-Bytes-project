<script>
  import { getComponents } from "../../stores/PC_Creator";
  import ProductList from "../../body/ProductList.svelte";
  console.log(getComponents("SSD"));
</script>

<div class="cuerpo">
  <div class="gradiente_img_cabecera row" />
  <h1 class="title">SSDs</h1>
  <ProductList products={getComponents("SSD")} />
</div>

<style lang="scss">
  .title {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .cuerpo {
    position: relative;
    margin-top: 9rem;
  }
</style>
