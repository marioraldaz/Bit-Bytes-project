<script>
  import carrito from "../stores/carrito";
  import ProductoCarrito from "./ProductoCarrito.svelte";
</script>

{#if $carrito.carrito.length == 0}
  <div class="carrito__container">El carrito está vacío</div>
{:else}
  <div class="carrito__container">
    {#each $carrito.carrito as product}
      <ProductoCarrito nombre={product.name} />
    {/each}
  </div>
{/if}

<style lang="scss">
  .carrito__container {
    position: absolute;
    background-color: rgba(211, 17, 17, 0.8);
    transform: translate(-80%, 40%);
    overflow: scroll;
    width: 20%;
    height: 10rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(226, 84, 7);
    text-align: center;
    transition: all 0.3s;

    & img {
      width: 20%;
      height: 50%;
    }
  }
</style>
