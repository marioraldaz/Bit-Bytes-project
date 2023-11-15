<script>
  import Product from "./Product.svelte";

  export let products;
</script>

<div class="list">
  {#each products as product}
    <div class="column">
      <Product {product} />
    </div>
  {/each}
</div>

<style lang="scss">
  .list {
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  .column {
    position: relative;
    float: left;
    width: 20rem;
    height: 37.5rem;
    margin: 2rem;
  }

  @media screen and (min-width: 1100px) {
    .column {
      width: 25%;
    }
  }

  @media screen and (max-width: 1100px) {
    .column {
      width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }
</style>
