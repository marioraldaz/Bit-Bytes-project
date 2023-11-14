<script>
  export let products;
  export let mainImg;
  let index = 0;
  import Product from "./Product.svelte";
  let showProducts = [];
  let leftProduct = showProducts[products.length - 1];
  let firstAnimation = true;
  let movingLeft = false;
  let movingRight = false;
  let nextProduct = products[products.length - 2];
  changeShowProducts();

  function changeShowProducts() {
    showProducts = [];

    if (index > 0) {
      leftProduct = products[index - 1];
      showProducts.push(leftProduct);
    } else {
      leftProduct = products[products.length - 1];
      showProducts.push(leftProduct);
    }

    showProducts.push(products[index]);

    if (index == products.length - 1) {
      showProducts.push(products[0]);
    } else {
      showProducts.push(products[index + 1]);
    }
  }

  $: {
    if (index) {
      firstAnimation = false;

      if (index >= products.length - 1) {
        index = 0;
      } else {
        if (index == -1) {
          index = products.length - 1;
        }
      }
    }
    changeShowProducts();
  }

  function moveLeft() {
    movingRight = false;
    movingLeft = true;
    index++;
  }
  function moveRight() {
    movingRight = true;
    if (index == 0) {
      nextProduct = products[products.length - 2];
    } else if (index == 1) {
      nextProduct = products[products.length - 1];
    } else {
      nextProduct = products[index - 2];
    }
    setTimeout(() => {
      index--;
      movingRight = false;
    }, 2000);
  }
  console.log(products);
</script>

<div class="container">
  <div class="container__img">
    <img src={mainImg} class="container__img__img" alt="mainImgSrc4" />
  </div>

  <div class="container__caroussel">
    <button class="container__caroussel__previousButton" on:click={moveLeft}>
      <img
        src="images/left-arrow.png"
        alt="izq"
        class="container__caroussel__previousButton__img"
      />
    </button>
    <div
      class="container__caroussel__hiddenProd {movingLeft ? 'moveLeft' : ''}
    {movingRight ? 'moveRight' : ''}"
    >
      <Product product={nextProduct} />
    </div>
    {#key showProducts}
      {#each showProducts as product}
        {#if product == products[index]}
          <div
            class="container__caroussel__active {firstAnimation
              ? 'openAnimation'
              : 'normalAnimation'}
                 {movingLeft ? 'moveLeft' : ''}
                 {movingRight ? 'moveRight' : ''}"
          >
            <Product {product} />
          </div>
        {:else if product == leftProduct}
          <div
            class="container__caroussel__inactive1 {firstAnimation
              ? 'openAnimation'
              : 'normalAnimation'}
                 {movingLeft ? 'moveLeft' : ''}
                 {movingRight ? 'moveRight' : ''}"
          >
            <Product {product} />
            {index}
          </div>
        {:else}
          <div
            class="container__caroussel__inactive2 {firstAnimation
              ? 'openAnimation'
              : 'normalAnimation'}
              {movingLeft ? 'moveLeft' : ''}
              {movingRight ? 'moveRight' : ''}
              "
          >
            <Product {product} />
          </div>
        {/if}
      {/each}
    {/key}
    <button class="container__caroussel__nextButton" on:click={moveRight}>
      <img
        src="images/right-arrow.png"
        alt="izq"
        class="container__caroussel__nextButton__img"
      />
    </button>
  </div>
</div>

<style lang="scss">
  .container {
    height: 100%;
    width: 100%;
    padding-bottom: 2.5rem; /* Footer height */
    animation-duration: 3s;
    animation-name: slidein;
    display: inline-block;
    box-sizing: border-box;
    background-color: white;
    &__img {
      width: 40rem;
      height: 90%;
      margin-top: 2rem;
      margin-left: 2rem;
      animation-delay: 0.2s;
      animation-duration: 3s;
      animation-name: slidein;
      float: left;
      &__img {
        width: 100%;
        height: 100%;
        transition: width 2s, height 2s, transform 1s, rotate 2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    &__caroussel {
      width: 100%;
      height: 100%;
      left: 20%;
      position: relative;
      padding-top: 2rem;

      &__hiddenProd {
        &.moveRight {
          animation-duration: 2s;
          animation-name: moveHiddenProdRight;
        }
        background-color: white;
        z-index: 2;
        width: 35rem;
        height: 100%;
        top: -20%;
        left: 2.5%;
        opacity: 0%;
        position: absolute;
        transform: scale(0.3);
      }
      &__inactive1 {
        &.openAnimation {
          animation-duration: 5s;
          animation-name: slidein2;
        }
        pointer-events: none;
        &.moveRight {
          animation-duration: 2s;
          animation-name: moveInactive1Right;
          animation-timing-function: ease-in-out;
        }
        width: 30rem;
        transform: scale(0.7);
        position: absolute;
        left: 15%;
        top: 10%;
        opacity: 30%;
        z-index: 5;
      }

      &__active {
        &.openAnimation {
          animation-duration: 6s;
          animation-name: slidein3;
        }
        &.moveRight {
          animation-duration: 2s;
          animation-name: moveRightActive;
          animation-timing-function: ease-in-out;
        }

        width: 45rem;
        height: 100%;
        position: absolute;
        left: 30%;
        z-index: 6;
        background-color: white;
        border: 0.5rem solid black;
        padding: 0.5rem;
        transition: transform 1s;
        top: 2.5%;
        &:hover {
          transform: scale(1.1);
          box-shadow: 1rem 0.5rem 3rem 0.5rem rgb(94, 176, 208);
        }
      }

      &__inactive2 {
        &.openAnimation {
          animation-duration: 7s;
          animation-name: slidein4;
        }
        &.moveRight {
          animation-duration: 2s;
          animation-name: moveInactive2Right;
          animation-timing-function: ease-in-out;
        }
        width: 30rem;
        transform: scale(0.7);
        position: absolute;
        left: 55%;
        top: 10%;
        opacity: 30%;
        z-index: 5;
        pointer-events: none;
      }

      &__nextButton {
        animation-duration: 8s;
        animation-name: buttonAnimation;
        width: 5rem;
        height: 5rem;
        position: absolute;
        left: 70%;
        top: 50%;
        z-index: 99;
        &__img {
          width: 100%;
          height: 100%;
        }
        transition: transform 1s;

        &:hover {
          transform: scale(1.3);
          box-shadow: 0rem 0rem 0rem 0.2rem rgb(0, 0, 0);
        }
      }

      &__previousButton {
        animation-duration: 8s;
        animation-name: buttonAnimation;
        z-index: 99;
        width: 5rem;
        height: 5rem;
        position: absolute;
        left: 15%;
        top: 50%;
        transition: transform 1s;

        &:hover {
          transform: scale(1.3);
          box-shadow: 0rem 0rem 0rem 0.2rem rgb(0, 0, 0);
        }
        &__img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @keyframes slidein {
    from {
      margin-left: 90%;
    }

    to {
      left: 0%;
    }
  }

  @keyframes slidein2 {
    0% {
      opacity: 0;
    }

    35% {
      margin-left: 100%;
    }

    100% {
      left: 15%;
    }
  }

  @keyframes slidein3 {
    0% {
      opacity: 0;
    }

    35% {
      margin-left: 100%;
    }

    100% {
      left: 30%;
    }
  }
  @keyframes slidein4 {
    0% {
      opacity: 0;
    }

    35% {
      margin-left: 100%;
    }

    100% {
      left: 55%;
    }
  }
  @keyframes buttonAnimation {
    0% {
      opacity: 0;
    }

    70% {
      opacity: 50%;
      transform: scale(0.01);
    }

    100% {
      opacity: 100%;
    }
  }

  @keyframes moveRightActive {
    from {
    }
    to {
      border: none;
      width: 30rem;
      transform: scale(0.7);
      position: absolute;
      left: 55%;
      top: -5%;
      opacity: 30%;
    }
  }

  @keyframes moveInactive2Right {
    from {
    }
    to {
      border: none;
      width: 30rem;
      transform: scale(0);
      position: absolute;
      left: 58%;
      top: 20%;
      opacity: 0;
    }
  }

  @keyframes moveInactive1Right {
    from {
      opacity: 50%;
    }
    to {
      height: 100%;
      width: 45rem;
      left: 30%;
      top: 2.5%;
      z-index: 6;
      background-color: white;
      border: 0.5rem solid black;
      padding: 0.5rem;
      transform: scale(1);
      opacity: 100%;
    }
  }

  @keyframes moveHiddenProdRight {
    from {
      opacity: 0%;
    }
    to {
      width: 30rem;
      transform: scale(0.7);
      position: absolute;
      left: 15%;
      top: -5%;
      opacity: 30%;
      z-index: 5;
    }
  }
</style>
