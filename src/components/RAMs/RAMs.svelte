<script>
    import {getComponents} from   "../../stores/PC_Creator";
    import ProductList from "../../body/ProductList.svelte";
    
    let GBs;
    let products=getComponents("RAM");
    let prices=[];
    products.map((product) => prices.push(product.price))
    
    let lowestPrice=Math.min(...prices);
    let highestPrice=Math.max(...prices);
    let minPrice=lowestPrice ;
    let maxPrice=highestPrice ;
    $:{ 
       if(GBs!="Any"){
        let newProducts=[];
        for(let product of products){
          if(product.GB==GBs){
            newProducts.push(product);
          }
        }
        products = newProducts;
      } else{
        products = getComponents("RAM");
      }
    }

    $:{
      if(minPrice || maxPrice){
        let newProducts=[];
        for(let product of products){
          if(product.price>=minPrice && product.price<=maxPrice){
            newProducts.push(product);
          } 
        }
        products=newProducts;
      }
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
            <input type="number" value={minPrice}/>MIN:{minPrice}<input type="range" min={lowestPrice} bind:value={minPrice}/>
          </div>
          <div class="cuerpo__filters__price__max">
            MAX:<input type="range" max={highestPrice} bind:value={maxPrice}/>{maxPrice}
          </div>
        </div>
      </div>
      

        <ProductList {products}  />
    </div>

<style lang="scss">
  
  .cuerpo{
    position: relative;
    margin-top: 9rem;
    display: inline;
    &__title{
          font-size: 5rem;
          text-align: center;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }
    &__filters{

        width:100%;
        height:10rem;
        float: left;
        &__GBs{
          width:20%;
          height:6rem;
          margin-left:2rem;
          float:left;  

          &__title{
            font-size: 4rem;
          }
          &__select{
            font-size:2rem;
          }
        }

        &__price{
          width:35%;
          height: 5rem;
          margin-left:5rem;
          float:left;
          position: relative;
          &__title{
            font-size:4rem;
          }
          &__min{
            font-size:3rem;
            position:absolute;
            top:80%;
            left:0;
          }
          &__max{
            top:80%;
            left:50%;
            font-size:3rem;
            position:absolute;
           
          }
        }
    }
  }
</style>