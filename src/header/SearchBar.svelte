<script>
  import products from "../components/products.json";

  let arrayProducts = products.products;
  let output = [];
  let showResults=false;

  function searchProducts(userInput) {
    for (var i = 0; i < arrayProducts.length; i++) {
      if (arrayProducts[i].name.match(userInput)) {
        output.push(arrayProducts[i].name);
      }
    }
  }

  $:{
    userInput.length > 0 ? showResults=true : showResults=false;
    searchProducts(userInput);  
  }

  let userInput = "";
</script>

<div class="container">
  <input
    type="search"
    class="container__searchBar"
    placeholder="   Search for amazing components"
    bind:value={userInput}
  >
  <button class="container__search-button" on:click={searchProducts}>
    <div class="container__search-button__div">
      <img alt="logo" src="../images/search_logo.png" />
    </div>
  </button>
  <div class="container__results">
    {#if showResults}
    <h1>Results:</h1>
      {#each output as item}
        <div class="container__result__elem"><p>{item.name}das</p></div>
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .container {
    position:absolute;
    left: 60%;
    top:-10%;
    width: 35rem;
    height: 5rem;
    transform: translate(0%, 50%);

  
    &__results {
      background-color: white;
      width:100%;
      height: 100%;
      &__elem {
        float: inline-end;
      }
    }
    &__searchBar {
      position:relative;
      width: 100%;
      height: 100%;
      border: 0.2rem solid violet;
      border-radius: 2rem;
      padding-left: 2rem;
      &:hover {
        transform: scale(110%);
      }

      &:focus {
        border: 0.3rem px solid violet;
        outline: none;
      }
    }
    &__search-button {
      position: relative;
      top:-90%;
      left:85%;
      width: 3.5rem;
      height: 3.5rem;
      background: none;
      border:none;
      z-index: 1000;
      &:hover{
        cursor: pointer;
        transform: scale(120%);
      }
      &__div {
        width: 100%;
        height: 100%;
      
        & img{
          height: 100%;
        }
      }

    }
  }
</style>
