<script>
  import carrito from "../stores/carrito";
  import ProductoCarrito from "./ProductoCarrito.svelte";
</script>

{#if $carrito.carrito.length == 0}
  <div class="carrito__container">El carrito está vacío</div>
{:else}
  <div class="carrito__container">
    {#each $carrito.carrito as product}
      <ProductoCarrito
        logo={product.product.logo}
        nombre={product.product.name}
        cantidad={product.cantidad}
      />
    {/each}
  </div>
{/if}

<style lang="scss">
  .carrito__container {
    position: absolute;
    top: 0.5rem;
    background-color: rgb(255, 255, 255);
    border: 2px solid black;
    border-radius: 1rem;
    transform: translateY(40%);
    overflow: auto;
    right: 2rem;
    width: 50%;
    max-width: 40rem;
    height: 20rem;
    font-size: 1.5rem;
    font-weight: 900;
    transition: all 0.3s;

    & img {
      width: 20%;
      height: 50%;
    }
  }
</style>
