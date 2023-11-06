<script>
  import { clickOutside } from "../scripts/clickOutside";
  import trelly from "../stores/trelly";
  import TrellyProduct from "./TrellyProduct.svelte";
</script>

{#if $trelly.trelly.length == 0}
  <div class="trelly__container">El carrito está vacío</div>
{:else}
  <div class="trelly__container">
    {#each $trelly.trelly as product}
      <TrellyProduct
        logo={product.product.logo}
        nombre={product.product.name}
        cantity={product.cantity}
      />
    {/each}
  </div>
{/if}

<style lang="scss">
  .trelly__container {
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
  }
</style>
