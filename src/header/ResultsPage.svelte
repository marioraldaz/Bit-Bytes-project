<script>
  import ProductList from "../body/ProductList.svelte";
  import ResultsPage from "../stores/ResultsPage.js";
  import { onMount } from "svelte";
  let products = [];
  
  onMount(()=>{
    return ResultsPage.subscribe((data)=>{
    products=data.products;
    });
  });

</script>


<div class="container">
<div class="cuerpo">
  {#if products.length == 0}
    <h1 class="container__title">We could not find any products matching your search :c</h1>
  {:else}
    <h1 class="container__title">This is what we found:</h1>
    <div class="container__products">
      <ProductList products={products}/>
    </div>
  {/if}
</div>
</div>


<style type="scss">
  .container{
    width: 100%;
    height: 100%;
    &__products{
      background-color: red !important;
    }
  }

  .cuerpo{
  position: relative;
  margin-top: 9rem;
  font-size: 2rem;
  text-align: center;
}
 
</style>

