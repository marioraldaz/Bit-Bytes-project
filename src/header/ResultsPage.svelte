<script>
  import ProductList from "../body/ProductList.svelte";
  import ResultsPage from "../stores/ResultsPage.js";
  import { onMount } from "svelte";
  let products = [];
  let filteredProducts=products;
  
  
  let prices = [];
  let lowestPrice = Math.min(...prices);
  let highestPrice = Math.max(...prices);
  let minPrice = lowestPrice;
  let maxPrice = highestPrice;
  console.log(prices)
  onMount(() => {
    return ResultsPage.subscribe((data) => {
      products = data.products;
       prices = [];
      products.map((product) => prices.push(product.price))
        console.log(products)
    lowestPrice = Math.min(...prices);
      highestPrice = Math.max(...prices);
      minPrice = lowestPrice;
      maxPrice = highestPrice;
    });
  });

  $: {
    filteredProducts = products;
    let newProducts = [];
    for (let product of products) {
        if (product.price >= minPrice && product.price <= maxPrice) {
                newProducts.push(product);
        }
    }
    filteredProducts = newProducts;
}
</script>

<div class="container">
  <div class="container__filters">
    <div class="container__filters__price">
      <h1 class="container__filters__price__title">Price Range</h1>
      <div class="container__filters__price__min">
          MIN:<input type="number" class="container__filters__price__min__numberbox" value={minPrice} min={lowestPrice} max={highestPrice}/>
          <input type="range" min={lowestPrice} max={highestPrice} bind:value={minPrice}/>
      </div>
      <div class="container__filters__price__max">
        <input type="range" max={highestPrice} min={lowestPrice} bind:value={maxPrice}/>
        MAX:<input type="number" class="container__filters__price__max__numberbox" value={maxPrice} min={lowestPrice} max={highestPrice}/>
      </div>
  </div>
</div>
  {#if products.length == 0}
    <h1 class="container__title">
      We could not find any products matching your search :c
    </h1>
  {:else}
    <h1 class="container__title">This is what we found:</h1>
    <div class="container__productList">
      <ProductList products={filteredProducts} />
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    width:100%;
    margin-top:10rem;
    &__filters {
      width: 80%;
      height: 10rem;
      margin-left:4rem;
      background-color: white;
      &__price {
          padding: 2rem;
            width: 70rem;
            font-size:2rem;
            height: 24rem;
            float: left;
            position: relative;

          &__title {
            background-color: white;
              width:10rem;
              font-size: 2rem;
              float: left;
          }

          &__min {
              cursor: pointer;
              font-size: 3rem;
              position: absolute;
              top: 40%;
              left: 0;
              height: 50%;

              &__numberbox {
                  width: 7rem;
                  height: 50%;
                  transform: translateY(-0.4rem);
              }
          }

          &__max {
              cursor: pointer;

              font-size: 3rem;
              position: absolute;
              top: 40%;
              left: 36.3%;
              height: 50%;

              &__numberbox {
                  width: 7rem;
                  height: 50%;
                  transform: translateY(-0.4rem);
              }
            }
        }
    }
    &__title {
      font-size: 5rem;
      text-align: left;
      height: 20rem;
      width:60rem;
      margin-left: 4rem;
    }
    &__productList {
      width: 100%;
    }
  }
    @media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type="range"] {
        overflow: hidden;
        width: 11rem;
        -webkit-appearance: none;
        background-color: #d8b400;
    }

    input[type='range']::-webkit-slider-runnable-track {
        height: 1.5rem;
        -webkit-appearance: none;
        color: rgb(19, 187, 117);
        margin-top: -0.1rem;
    }

    input[type='range']::-webkit-slider-thumb {
        width: 1rem;
        -webkit-appearance: none;
        height: 1.5rem;
        cursor: ew-resize;
        background: #000000;
        box-shadow: -8rem 0 0 80rem #43e5f7;
    }

  }
  

/** FF*/
input[type="range"]::-moz-range-progress {
    background-color: #43e5f7;
}

input[type="range"]::-moz-range-track {
    background-color: #9a905d;
}

/* IE*/
input[type="range"]::-ms-fill-lower {
    background-color: #43e5f7;
}

input[type="range"]::-ms-fill-upper {
    background-color: #9a905d;
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
        font-size: 1.8rem;
    }

    .component__name {
        font-size: 3rem;
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
