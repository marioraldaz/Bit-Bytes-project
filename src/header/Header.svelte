<script>
  import Menu from "./Menu.svelte";
  import Carrito from "./Carrito.svelte";
  import Usuario from "./Usuario.svelte";
</script>

<div class="header">
  <Menu />
  <div class="header__logo">
    <a href="/"><img src="./imagenes/logo.png" alt="logo.png" /></a>
  </div>
  <Carrito />
  <Usuario />
</div>

<style lang="scss">
  .header {
    position: fixed;
    height: 82px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid black;
    animation: headerHeight;
    animation-duration: 4s;
    animation-timing-function: ease-out;
    z-index: 9999;
    &__logo {
      display: inline-block;
      height: 82px;
    }
    &__logo img {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      height: 100%;
      animation: introLogo;
      animation-duration: 2.5s;
      animation-timing-function: ease-in;
    }
  }
</style>
