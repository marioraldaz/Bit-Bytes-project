<script>
  import Product from "../body/Product.svelte";
  import products from "../components/products.json"
  let arrayProducts = products.products;

  function searchProducts(userInput) {
    let output=[];
    for(var i = 0; i < arrayProducts.length; i++){
      if(arrayProducts[i].name.match(userInput)){
        output.push(arrayProducts[i]);
      }
    }
    return output;
  }

  let userInput = "";
</script>

<div class="searchBar-container">
  <input type="search" class="searchBar" placeholder="   Search for amazing components" bind:value={userInput} />
  <button class="search-button" on:click={searchProducts}></button>
  <img alt="search_logo" class="search_logo" src="search_logo.png"/>
</div>

<style lang="scss">
  .searchBar-container {
    float: right;
    transform: translate(0%, 50%);
    .searchBar {
      width: 100%;
      height: 4rem;
      border: 0.2rem solid violet;
      border-radius: 20px;

      &:hover {
        transform: scale(110%);
      }

      &:focus {
        border: 0.3rem px solid violet;
        outline: none;
      }
    }
  }

</style>
