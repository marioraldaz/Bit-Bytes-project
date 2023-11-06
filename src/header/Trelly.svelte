<script>
  import { beforeUpdate, tick } from "svelte";
  import Product from "../body/Product.svelte";
  import TrellyElem from "./TrellyElem.svelte";

  let visibility = false;
  let outsideClicked = false;

  function setVisibility() {
    if (!outsideClicked) {
      visibility = !visibility;
    } else {
      outsideClicked = false;
    }
  }
</script>

<div class="header__trelly">
  <label for="trelly"
    ><img src="./images/carrito-de-compras.png" alt="trelly.png" /></label
  >
  <input type="checkbox" id="trelly" name="" on:click={setVisibility} />
  {#if visibility}
    <TrellyElem
      bind:visibility
      on:click_outside={() => {
        outsideClicked = true;
        visibility = false;
      }}
    />
  {/if}
</div>

<style lang="scss">
  .header__trelly {
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
