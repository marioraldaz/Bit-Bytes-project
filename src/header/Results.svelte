<script>
    import ProductList from "../body/ProductList.svelte";
    export let products=[];
</script>

    <div class="container"> 
        <h1 class="title">Results</h1>
        <ProductList products={products}/>
    </div>
  

<style lang="scss">

</style>