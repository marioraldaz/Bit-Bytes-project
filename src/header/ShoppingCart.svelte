<script>
  import { beforeUpdate, tick } from "svelte";
  import Product from "../body/Product.svelte";
  import ShoppingCartElem from "./ShoppingCartElem.svelte";
  import { clickOutside } from "../scripts/clickOutside";
  import { fade, fly } from "svelte/transition";
  import { bounceOut, cubicOut, quintOut } from "svelte/easing";

  let visibility = false;
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
    <div class="container" transition:fly={{duration: 1000, x: 600, easing: quintOut}}  >
      <ShoppingCartElem visibility />
    </div>
  {/if}
</div>

<style lang="scss">
  .header__ShoppingCart {
    float: right;
    width: 8rem;
    height: 8rem;
    animation: hideicon;
    animation-duration: 5s;
    animation-timing-function: ease-in;
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
    transition: all .5s ease-out;
  }

  [type="checkbox"] {
    display: none;
  }

  .container {
    position: absolute;
    top: 8rem;
    background-color: rgb(255, 255, 255);
    border: 2px solid black;
    transform: translateX(5%);
    right: 2rem;
    width: 90%;
    max-width: 50rem;
    height: 92vh;
    z-index: 9999;
  }

  @media screen and (max-width:600px){
    .header__ShoppingCart  {
      width: 5.5rem;
      height: 5.5rem;
      margin-top:6%;
    }
  }

  @media screen and (max-width:600px){
    .container  {
      width: 100vw;
      max-width: none;
    }
  }
</style>