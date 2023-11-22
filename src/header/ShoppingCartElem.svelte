<script>
  
  // @ts-nocheck
  import shoppingCart from "../stores/shoppingCart";
  import ShoppingCartProduct from "./ShoppingCartProduct.svelte";

  export let visibility;
</script>

{#if $shoppingCart.shoppingCart.length == 0}
  <div class="shoppingCart__container {visibility ? 'visble' : ''}">
    <div class="shoppingCart__container--vacio" />
  </div>
{:else}
  <div class="shoppingCart__container {visibility ? '' : 'hide'}">
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
    <div class="shoppingCart__total">TOTAL: {$shoppingCart.totalPrice.toFixed(2)}€</div>
  </div>
{/if}

<style lang="scss">
  .shoppingCart__container {
    background-color: rgb(255, 255, 255);
    border-radius: 1rem;
    overflow: auto;
    width: 100%;
    height: 90vh;
    font-size: 1.5rem;
    font-weight: 900;
    padding: 2rem;
    
    &--vacio {
      position: relative;
      height: 50%;
      width: 50%;
      background-image: url("../images/cancelarEntrega.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      top: 0;
      left: 0;
      transform: translate(50%,50%);
    }
  }

  .shoppingCart__total{
    text-align: center;
    font-size: 5rem;
    bottom: 0;

  }

  @keyframes showCart {
    0% {
      opacity: 0;
      transform: translateX(120%);
    }
    100% {
      opacity: 1;
    }
  }
</style>
