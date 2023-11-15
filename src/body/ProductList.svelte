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
    display: table;
    padding: 1rem;
    margin-left:6rem;
    width:100%;
  }

  .column {
    display: table-row;
    float:left;
    width: 35rem;
    height: 40.5rem;
    margin: 1rem;
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
