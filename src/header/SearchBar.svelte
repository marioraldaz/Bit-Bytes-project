<script>
  import products from "../components/products.json"

  let arrayProducts = products.products;
  let output=[];

  function searchProducts(userInput) {
    for(var i = 0; i < arrayProducts.length; i++){
      if(arrayProducts[i].name.match(userInput)){
        output.push(arrayProducts[i].name);
      }
    }
  }

  let userInput = "";
</script>

<div class="container">
  <input type="search" class="container__searchBar" placeholder="   Search for amazing components" bind:value={userInput} />
  <button class="container__search-button" on:click={searchProducts}>
    <div class="container__search-button__div">
      <img alt="logo" src="src/images/usuario.png"/>
    </div>
  </button>
   <div class="container__results">
    <h1>Results:</h1>
    {#key output}
    {#each output as item, index (item.id)}
      <div class="container__result__elem"><p>dasdasda</p></div>
    {/each}
    {/key}
  </div>
</div>

 

<style lang="scss">
  .container {
    float: right;
    width:40rem;
    height: 4.5rem;
    transform: translate(0%, 50%);

    &__result{
      &__elem{
        float:inline-end;
      }
    }
    &__searchBar {
      width: 90%;
      height: 100%;
      border: 0.2rem solid violet;
      border-radius: 2rem;
      &:hover {
        transform: scale(110%);
      }

      &:focus {
        border: 0.3rem px solid violet;
        outline: none;
      } 
    }
    &__search-button{
        float:right;
        width:2rem;
        height: 2rem;
        &__div{
        
        width:100%;
        height: 100%;
        background-color: red;
        }
      }
  }

</style>
