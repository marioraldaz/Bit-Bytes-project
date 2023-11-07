<script>
  export let quantity;
  export let nombre = "";
  export let logo;
  export let price;
</script>

<div class="row shoppingCart__product">
  <div
    class="col-1-of-3 shoppingCart__product--logo"
    style="background-image: url('{logo}');"
  />
  <div class="col-2-of-3 shoppingCart__product--data">
    <div class="shoppingCart__product--data--name">{nombre}</div>
    <div class="shoppingCart__product--data--price">{price.toFixed(2)}</div>
    <div class="shoppingCart__product--data--quantityModifier">
      <div class="shoppingCart__product--data--quantity">{quantity}</div>
      <button class="shoppingCart__product--data--add" on:click>+</button>
    </div>
  </div>
</div>

<style lang="scss">
  .shoppingCart__product {
    position: relative;
    width: 100%;
    height: 90%;
    &--logo {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
    }
    &--data {
      padding: 5px;

      &--quantityModifier{
        position: absolute;
        bottom: 0;
        right: 3rem;
        
      }
      &--quantity {
        display: inline-block;
        border: 1px solid black;
        background-color: white;
      }

      &--price {
        position: absolute;
        display: inline-block;
        bottom: 0;
        font-size: 3rem;
      }
      &--add {
        cursor: pointer;
        position: absolute;
        
      }
    }
  }

  .row {
    max-width: 95%;
    max-height: 50%;
    margin: 2rem auto;
    background-color: aqua;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    &:after {
      content: "";
      display: table;
      clear: both;
    }

    .col-1-of-3 {
      float: left;
      background-color: rgb(255, 166, 0);
      width: calc((100% - (1rem * 2)) / 3);
      height: 100%;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
    .col-2-of-3 {
      float: left;
      width: calc(((100% - (1rem * 2)) / 3) * 2 + 1rem);

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
</style>
