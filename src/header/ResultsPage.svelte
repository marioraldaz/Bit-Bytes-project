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

<h1 class="title">Results</h1>

<div class="container">
    <ProductList products={products}/>
</div>

<style type="scss">
  .title{
    font-size: 3rem;
    color:black;
  }
</style>

