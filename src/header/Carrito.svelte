<script>
export let productos = []
</script>

<div class="header__carrito">
  <a href="/"
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
    }
    &:hover {
      background-color: rgba(128, 128, 128, 0.271);
    }
  }
</style>
