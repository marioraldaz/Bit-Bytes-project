<script>
import {
    getComponents
} from "../../stores/PC_Creator";
import ProductList from "../../body/ProductList.svelte";

let GBs;
let products = getComponents("RAM");
let prices = [];
products.map((product) => prices.push(product.price))

let lowestPrice = Math.min(...prices);
let highestPrice = Math.max(...prices);
let minPrice = lowestPrice;
let maxPrice = highestPrice;
$: {
    products = getComponents("RAM");
    let newProducts = [];
    for (let product of products) {
        if (product.price >= minPrice && product.price <= maxPrice) {
            if (GBs == "Any") {
                newProducts.push(product);
            } else if (product.GB == GBs) {
                newProducts.push(product);
            }
        }
    }
    products = newProducts;
}
</script>

<div class="cuerpo">
    <div class="gradiente_img_cabecera row">
    </div>
    <h1 class="cuerpo__title">RAMS</h1>
    <div class="cuerpo__filters">
        <div class="cuerpo__filters__GBs">
            <h1 class="cuerpo__filters__GBs__title">Search By GBs</h1>
            <select class="cuerpo__filters__GBs__select" name="selectGBs" bind:value={GBs}>
                <option value="Any">Any</option>
                <option value=8>8GB</option>
                <option value=16>16GB</option>
                <option value=32>32GB</option>
            </select>
        </div>

        <div class="cuerpo__filters__price">
            <h1 class="cuerpo__filters__price__title">Price Range</h1>
            <div class="cuerpo__filters__price__min">
                MIN:<input type="number" class="cuerpo__filters__price__min__numberbox" value={minPrice} min={lowestPrice} max={highestPrice}/>
                <input type="range" min={lowestPrice} max={highestPrice} bind:value={minPrice}/>
            </div>
            <div class="cuerpo__filters__price__max">
              <input type="range" max={highestPrice} min={lowestPrice} bind:value={maxPrice}/>
              MAX:<input type="number" class="cuerpo__filters__price__max__numberbox" value={maxPrice} min={lowestPrice} max={highestPrice}/>
            </div>
        </div>
    </div>

    <ProductList {products}  />
</div>

<style lang="scss">
.cuerpo {
    position: relative;
    margin-top: 9rem;
    display: inline;
    &__title {  
        font-size: 5rem;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
        
    }

    &__filters {

        width: 100%;
        height: 14rem;
        float: left;
        &__GBs {
            width: 20%;
            height: 6rem;
            margin-left: 2rem;
            float: left;
            position: relative;
            &__title {
                font-size: 4rem;
                top:0;
            }

            &__select {
                font-size: 2rem;
                left: 0;
                transform: translateY(2rem);
            }
        }

        &__price {
            width: 70rem;
            height: 14rem;
            margin-left: 5rem;
            float: left;
            position: relative;
            &__title {
                font-size: 4rem;
                position: absolute;
                top:0;
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
}
/*Chrome*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    input[type='range'] {
      overflow: hidden;
      width: 11rem;
      -webkit-appearance: none;
      background-color: #9a905d;
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
      background: #434343;
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
</style>
