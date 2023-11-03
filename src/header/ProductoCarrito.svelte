<script>
  export let cantidad;
  export let nombre = "";
  export let logo;
</script>

<div class="row trelly__product">
  <div class="col-1-of-3 trelly__product--logo">
    <img src={logo} alt="img_producto" />
  </div>
  <div class="col-2-of-3 trelly__product--name">
    <div>{nombre}</div>
    <div>Cantidad: {cantidad}</div>
  </div>
</div>

<style lang="scss">
  .trelly__product {
    position: relative;
    width: 100%;
    height: 90%;
    &--logo {
      text-align: center;
      & img {
        position: relative;
        height: 100%;
      }
    }
  }

  .row {
    max-width: 95%;
    max-height: 50%;
    margin: 0 auto;
    background-color: aqua;

    &:not(:last-child){
      margin-bottom: 2rem;
    }
    &:after{
      content: "";
      display: table;
      clear: both;
    }

    .col-1-of-3{
      float: left;
      background-color: rgb(255, 166, 0);
      width: calc((100% - (1rem*2))/3);
      height: 100%;

      &:not(:last-child){
        margin-right: 1rem;
      }
    }
    .col-2-of-3{
      float: left;
      width: calc(((100% - (1rem * 2))/3) * 2 + 1rem);

      &:not(:last-child){
        margin-right: 1rem;
      }
    }
  }
</style>
