<script>
  import Product from "./Product.svelte";
  import carrito from "../stores/carrito.js";

  export let products;
</script>

<div class="list">
  {#each products as product}
    <div class="column">
      <Product
        {product}
        addToCarrito={() => {
          $carrito.carrito = [...$carrito.carrito, product];
          console.log($carrito.carrito);
        }}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  .list {
    position: relative;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    overflow: auto;
  }

  .column {
    position: relative;
    float: left;
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
