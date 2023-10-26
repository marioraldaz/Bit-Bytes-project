<script>
  export let productos = [];
</script>

<div class="header__carrito">
  <a href="#"
    ><img src="./images/carrito-de-compras.png" alt="carrito.png" />
  </a>
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
</style>
