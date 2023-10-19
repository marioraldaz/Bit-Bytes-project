<script>
    import Product from "src/body/Product.svelte";
    import RAMs from "src/components/RAMs/RAMs.json";
    let arrayRams = RAMs;
</script>


<div class="container">
    {#each arrayRams as RAM}
        <Product componentName:{RAM.name} id:{RAM.name} 
        image:{RAM.logo} specifications:{RAM.specifications} description:{RAM.description}/>
    {/each}
</div>



<style lang="scss">


</style>