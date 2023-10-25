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
  console.log("<<<<<<<<");
</script>

<div class="container">
  <h1>Results</h1>
    <ProductList products={products}/>

</div>