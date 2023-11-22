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
    <div class="shoppingCart__product--data--price">Total:<br>{price.toFixed(2)}€</div>
    <div class="shoppingCart__product--data--quantityModifier">
      <button class="shoppingCart__product--data--min" id="min" on:click> </button>
      <div class="shoppingCart__product--data--quantity">{quantity}</div>
      <button class="shoppingCart__product--data--add" id="add" on:click></button>
    </div>
  </div>
</div>

<style lang="scss">
  .shoppingCart__product {
    position: relative;
    width: 100%;
    height: 20%;
    outline: 1px solid ;
    outline-style: dashed;
    outline-offset: 0.7rem;
    border-radius: 2rem;
    &--logo {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
    }
    &--data {
      padding: 5px;
      
      &--name{
        font-size: 1.8rem;
      }
      &--quantityModifier {
        position: absolute;
        bottom: 0.5rem;
        right: 3rem;
      }
      &--quantity {
        display: inline-block;
        border: 1px solid black;
        border-radius: 1rem;
        background-color: white;
        padding: 1rem;
        margin-right: 0.5rem;
      }

      &--price {
        position: absolute;
        display: inline-block;
        bottom: 0.5rem;
        font-size: 3rem;
      }
      &--add {
        cursor: pointer;
        position: absolute;
        height: 2.5rem;
        width: 2.5rem;
        border: none;
        background-color: transparent;
        background-image: url('../images/anadir.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &--min {
        cursor: pointer;
        height: 2.3rem;
        width: 2rem;
        border: none;
        margin-right: 0.5rem;
        background-color: transparent;
        background-image: url('../images/menos.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }

  .row {
    max-width: 95%;
    max-height: 90%;
    margin: 0 auto;
    

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
    &:after {
      content: "";
      display: table;
      clear: both;
    }

    .col-1-of-3 {
      float: left;
      width: calc((100% - (1rem * 2)) / 3);
      height: 100%;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
    .col-2-of-3 {
      float: left;
      width: calc(((100% - (1rem * 2)) / 3) * 2 + 1rem);
      height: 100%;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  @media screen and (max-width:600px){
    .row .col-1-of-3  {
      position: relative;
      width: 0% ;
    }
    .shoppingCart__product--data--name{
      font-size: 1.2rem;
    }
    .shoppingCart__product--data--price{
      font-size: 2rem;
    }

  }
</style>
