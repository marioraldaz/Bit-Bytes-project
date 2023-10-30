<script>
  import Product from "../body/Product.svelte";
  import CarritoElem from "./CarritoElem.svelte";

  let visibility = false;
</script>

<div class="header__carrito">
  <label for="carrito"
    ><img src="./images/carrito-de-compras.png" alt="carrito.png" /></label
  >
  <input type="checkbox" id="carrito" name="" bind:checked={visibility} />
  {#if visibility}
    <CarritoElem />
  {/if}
</div>

<style lang="scss">
  .header__carrito {
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
