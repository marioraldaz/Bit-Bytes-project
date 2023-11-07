<script>
  import { beforeUpdate, tick } from "svelte";
  import Product from "../body/Product.svelte";
  import ShoppingCartElem from "./ShoppingCartElem.svelte";
  import { clickOutside } from "../scripts/clickOutside";

  let visibility = false;
  let outsideClicked = false;

  function setVisibility() {
    console.log(">>>>");
    visibility = !visibility;
  }
</script>

<div
  class="header__ShoppingCart"
  use:clickOutside
  on:click_outside={() => {
    visibility = false;
  }}
>
  <label for="ShoppingCart"
    ><img src="./images/carrito-de-compras.png" alt="ShoppingCart.png" /></label
  >
  <input type="checkbox" id="ShoppingCart" name="" bind:checked={visibility} />
  {#if visibility}
    <ShoppingCartElem />
  {/if}
</div>

<style lang="scss">
  .header__ShoppingCart {
    float: right;
    width: 8rem;
    height: 8rem;
    img {
      position: relative;
      width: 60%;
      height: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;

      &:hover {
        width: 75%;
        height: 75%;
        filter: drop-shadow(0.2rem 0.2rem 0.2rem rgb(176, 32, 229));
      }
    }
  }

  [type="checkbox"] {
    display: none;
  }
</style>
