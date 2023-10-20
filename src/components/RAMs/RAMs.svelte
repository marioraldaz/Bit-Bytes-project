<script>
    import Product from "../../body/Product.svelte";
    import RAMs from "./RAMs.json";
    let arrayRams = RAMs.RAMs;
</script>

<h1>RAMS</h1>
<div class="container">
    {#each arrayRams as RAM}
        <Product componentName={RAM.name} id={RAM.name} price={RAM.price}
        image={RAM.logo} specifications={RAM.specifications} description={RAM.description}/>
    {/each}
</div>



<style lang="scss">

</style>