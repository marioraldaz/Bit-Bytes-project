<script>
  import ProductList from "../body/ProductList.svelte";
  import ResultsPage from "../stores/ResultsPage.js";
  import { onMount } from "svelte";
  let products = [];

  onMount(() => {
    return ResultsPage.subscribe((data) => {
      products = data.products;
    });
  });
</script>

<div class="container">
  {#if products.length == 0}
    <h1 class="container__title">
      We could not find any products matching your search :c
    </h1>
  {:else}
    <h1 class="container__title">This is what we found:</h1>
    <div class="container__productList">
      <ProductList {products} />
    </div>
  {/if}
</div>

<style type="scss">
  .container {
    width: 100%;
    height: 100%;
    margin-top: 20rem;
    &__title {
      font-size: 5rem;
      height: 20rem;
    }
    &__productList {
      margin-left: 10rem;
      height: fit-content;
      width: 100%;
    }
  }
</style>
