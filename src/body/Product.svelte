<script>
  import trelly from "../stores/shoppingCart";
  import Stars from "./Stars.svelte";
  export let product;

  let clicked = false;

  function click() {
    clicked = !clicked;
    console.log("dasbsk");
  }
</script>

<div class="component {clicked ? 'clicked' : ''} {$$props.class}">
  <div class="component__side component__side--front">
    <div
      class="component__img"
      style="background-image: url({product.logo});"
    />
    <div class="component__box--description">
      <div class="component__name">{product.name}</div>
      <div class="component__description">
        Rating: <Stars nStars={product.starts} />
      </div>
      <div class="component__price">
        {product.price}€
      </div>
    </div>
    <button class="component__div--specs divCursor" on:click={click}
      >Specs</button
    >
    <button
      class="component__button--buy"
      on:click={() => $trelly.addToShoppingCart(product)}>Buy</button
    >
  </div>

  <div class="component__side component__side--back component__side--back-1">
    <button class="close divCursor" on:click={click}>X</button>
    <div class="specifications">
      <h4>Specifications</h4>
      {#each product.specifications as specification}
        <div>{specification}</div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .divCursor {
    cursor: pointer;
  }

  .specifications {
    height: 100%;
    & div {
      height: 15%;
      &:not(:last-child) {
        margin-bottom: 10%;
      }
    }

    & h4 {
      height: 10%;
      margin-bottom: 5%;
    }
  }

  .close {
    font-size: 1rem;
    border-radius: 0 10px 0 10px;
    background-color: rgb(185, 10, 185);
    position: absolute;
    padding: 0.5rem;
    right: 0.5rem;
    top: 0.5rem;
  }
  .component {
    height: 100%;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    margin: 0;
    width: 100%;
    background-color: white;
    &__div--specs {
      font-size: 2rem;
      height: 15%;
      width: 40%;
      float: left;
      margin-top: 5rem;
      margin-left: 2rem;
      border-radius: 2rem;
      background-color: rgb(3, 3, 3);
      color: white;
      transition: transform 1s;

      &:hover {
        transform: translate(0, -2rem);
        height: 20%;
        width: 45%;
        box-shadow: 1rem 0.5rem 3rem 0.5rem rgb(199, 94, 208);
      }
    }

    &__button--buy {
      font-size: 2rem;
      height: 15%;
      width: 40%;
      color: rgb(255, 255, 255);
      border-radius: 2rem;
      border: none;
      margin-top: 5rem;
      float: right;
      margin-right: 2rem;
      cursor: pointer;
      background-color: black;
      transition: transform 1s;

      &:hover {
        transform: translate(0, -2rem);
        height: 20%;
        width: 45%;
        box-shadow: 1rem 0.5rem 3rem 0.5rem rgb(199, 94, 208);
      }
    }
    &__side {
      color: #fff;
      font-size: 1rem;
      height: 25rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      margin: 0 auto;
      &--front {
        /*       background: linear-gradient(135deg, #00ffec, #0081ff);
     */
        color: grey;
        background-color: rgb(247, 255, 247);
      }

      &--back {
        transform: rotateY(180deg);
      }

      &--back-1 {
        background: linear-gradient(135deg, #00ffec, #0081ff);
      }
    }

    &.clicked &__side--front {
      transform: rotateY(180deg);
    }

    &.clicked &__side--back {
      transform: rotateY(0);
    }

    &__img {
      margin-top: 1rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      height: 50%;
      background-color: white;
    }

    &__box--description {
      background-color: white;
      height: 55%;
      padding: 1rem 1rem 1rem;
    }

    &__name {
      text-align: center;
      color: black;
      font-weight: bold;
      height: 33%;
      font-size: 1.8rem;

      &:hover {
        transform: skewX(-10deg);
      }
    }

    &__description {
      font-size: 1rem;
      height: 20%;
      width: 45%;
      position: absolute;
      left: 50%;
      top: 80%;
    }

    &__price {
      position: relative;
      color: rgb(192, 26, 26);
      font-weight: bold;
      font-size: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      height: 15%;
      position: absolute;
      left: 20%;
      top: 90%;
    }

    &__footer {
      height: 10rem;
      background-color: rgb(255, 255, 255);
      position: relative;
      margin-top: 6rem;
      color: rgb(0, 0, 0);
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 1600px) {
    .component__description {
      font-size: 1.3rem;
    }
    .component__name {
      font-size: 2rem;
    }
    .component__footer {
      font-size: 2.5rem;
    }
    .component__price {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .component__description {
      font-size: 1.8rem;
    }
    .component__name {
      font-size: 3rem;
    }
    .component__price {
      font-size: 3.5rem;
    }
  }

  @media screen and (max-width: 900px) {
    .component__description {
      font-size: 1.3rem;
    }
    .component__name {
      font-size: 2rem;
    }
    .component__price {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 600px) {
    .component__description {
      font-size: 1.7rem;
      margin-top: 2rem;
    }
    .component__name {
      font-size: 2.8rem;
    }
    .component__price {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 450px) {
    .component__description {
      font-size: 1.5rem;
    }
    .component__name {
      font-size: 2.3rem;
    }
    .component__price {
      font-size: 3rem;
    }
  }
</style>
