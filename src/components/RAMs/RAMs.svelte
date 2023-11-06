<script>
    import {getComponents} from   "../../stores/PC_Creator";
    import ProductList from "../../body/ProductList.svelte";
    
    let GBs;
    let products=getComponents("RAM");

   
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
      
</script>

    <div class="cuerpo">
        <div class="gradiente_img_cabecera row">
        </div>
        <h1 class="cuerpo__title">RAMS</h1>
        <div class="cuerpo__GBs">
          <h1 class="cuerpo__GBs__title">Search By GBs</h1>
          <select class="cuerpo__GBs__select" name="selectGBs" bind:value={GBs}>
            <option value="Any">Any</option>
            <option value=8>8GB</option>
            <option value=16>16GB</option>
            <option value=32>32GB</option>
          </select>
        </div>

        <button >aaa</button>

        <ProductList {products}  />
    </div>

<style lang="scss">
  
  .cuerpo{
    position: relative;
    margin-top: 9rem;
    &__title{
          font-size: 5rem;
          text-align: center;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }
    &__GBs{
      width:20%;
      height:6rem;
      font-size:3rem;
      margin-left:3rem;
      &__title{
        font-size: 4rem;
      }
    }
}
</style>