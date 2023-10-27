<script>
  import Product from '../body/Product.svelte'
  import carrito from '../stores/carrito'
  



</script>

<div class="header__carrito" >
  <label for="carrito"><img src="./images/carrito-de-compras.png" alt="carrito.png" /></label>
  <input type="checkbox" id="carrito" name="" bind:checked={$carrito.visibility}>
  {#if $carrito.visibility}
    <div class= "carrito__container">El carrito está vacío</div>
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

  .carrito__container{
      position: absolute;
      background-color: rgba(211, 17, 17, 0.8);
      transform: translate(-80%, 40%);
      overflow-y: auto;
      width: 20%;
      height: 10rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: rgb(226, 84, 7);
      text-align: center;
      transition: all 0.3s;
    }

    [type ="checkbox"] {
      display: none;
    }
</style>
