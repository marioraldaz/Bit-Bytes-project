<script>
  // @ts-nocheck

  import { clickOutside } from "../scripts/clickOutside";
  import shoppingCart from "../stores/shoppingCart";
  import ShoppingCartProduct from "./ShoppingCartProduct.svelte";
</script>

{#if $shoppingCart.shoppingCart.length == 0}
  <div class="shoppingCart__container">
    <div class="shoppingCart__container--vacio" />
  </div>
{:else}
  <div class="shoppingCart__container">
    {#each $shoppingCart.shoppingCart as product}
      <ShoppingCartProduct
        logo={product.product.logo}
        nombre={product.product.name}
        price={product.productPrice}
        quantity={product.quantity}
        on:click={(e) => {
          if (e.target.id === "add") {
            $shoppingCart.addToShoppingCart(product.product);
          } else if (e.target.id === "min") {
            $shoppingCart.removeFromShoppingCart(product.product);
          }
        }}
      />
    {/each}
  </div>
{/if}

<style lang="scss">
  .shoppingCart__container {
    position: absolute;
    top: 0.5rem;
    background-color: rgb(255, 255, 255);
    border: 2px solid black;
    border-radius: 1rem;
    transform: translateY(40%);
    overflow: auto;
    right: 2rem;
    width: 90%;
    max-width: 40rem;
    height: 20rem;
    font-size: 1.5rem;
    font-weight: 900;
    transition: all 0.3s;

    &--vacio {
      position: relative;
      height: 50%;
      background-image: url("../images/cancelarEntrega.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      top: 4rem;
    }
  }
</style>
