<script>
  import products from "../components/products.json";
  import Menus from "../stores/menus.js";
  import ResultsPage from "../stores/ResultsPage.js";
  import { clickOutside } from "../scripts/clickOutside.js";
  import ImageSearch from "./ImageSearch.svelte";

  
  let arrayProducts = products.products;
  let output = arrayProducts;
  let showResults = false;
  let userInput = "";
  let hiddenSearchBar = true;
  function hiddenSearch() {
    hiddenSearchBar = !hiddenSearchBar;
  }

  function searchProducts(userInput) {
    output = [];
    for (var i = 0; i < arrayProducts.length; i++) {
      if (arrayProducts[i].name.toUpperCase().match(userInput.toUpperCase())) {
        output.push(arrayProducts[i]);
      }
    }
    //need to save all of them and show only 5.

    for (var i = 0; i < arrayProducts.length; i++) {
      if (arrayProducts[i].type.toUpperCase().match(userInput.toUpperCase())) {
        output.push(arrayProducts[i]);
      }
    }
  }

  $: {
    userInput.length > 0 ? (showResults = true) : (showResults = false);
  }

  $: {
    showResults ? searchProducts(userInput) : (output = output);
  }

  function showSearchResults(item) {
    return function () {
      hiddenSearchBar = true;
      showResults = false;
      Menus.update((data) => {
        data.active = "ResultsPage";
        return data;
      });
      ResultsPage.update((data) => {
        console.log("length:", item.length);
        item.length == 0 ? (data.products = output) : (data.products = item);
        console.log("data:", data.products);
        return data;
      });
    };
  }


  function hideResults() {
    showResults = false;
  }
</script>

  {#if hiddenSearchBar}
  <div class="header__searchBar">
    <ImageSearch on:click={hiddenSearch} urlImage="../images/search_logo.png"/>
  </div>
    {:else}
    <div class="container">
      <div class="container__searchBar" >
        <button class="container__searchBar--close" on:click={hiddenSearch}
        >X</button
        >
        <input
        type="search"
        class="container__searchBar--input"
        placeholder="   Search for amazing components"
        bind:value={userInput} />
        
        <button class="container__search-button" on:click={showSearchResults([])}>
          <div class="container__search-button__div">
            <img alt="logo" src="../images/search_logo.png" />
          </div>
        </button>
      </div>
      
      {#if showResults}
      <div
      class="container__results"
      use:clickOutside
      on:click_outside={hideResults}
      >
      <h1 class="container__results__title">Results:</h1>
      {#each output.slice(0, 5) as item}
      <button
      class="container__results__elem"
      on:click={showSearchResults([item])}>{item.name}</button
      >
      {/each}
    </div>
    {/if}
  </div>
  {/if}

<style lang="scss">
  .header__searchBar{
        float: right;
        position: relative;
        top: 27%;
        left: -5%;
        height: auto; 
    }
    
  .container {
    position: relative;
    top: -10%;
    width: 35rem;
    height: 5rem;
    transform: translate(0%, 50%);
    float: right;

    &__results {
      width: 110%;
      &__title {
        width: 100%;
        background-color: white;
        font-size: 2rem;
        color: rgb(94, 176, 208);
        border: 2px solid black;
      }
      &__elem {
        width: 100%;
        background-color: white;
        float: inline-end;
        font-size: 2rem;
        border: 2px solid black;
        &:hover {
          cursor: pointer;
          background-color: azure;
        }
      }
    }

    &__searchBar {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      background-color: red;
      &:hover {
        transform: scale(110%);
      }

      &--input {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0.2rem solid violet;
        border-radius: 2rem;
        padding-left: 3rem;

        &:focus {
          border: 0.3rem px solid violet;
          outline: none;
        }
      }

      &--close {
        position: absolute;
        z-index: 2;
        top: 6%;
        left: 2%;
        font-size: 1rem;
        border-radius: 50%;
        background-color: violet;
        padding: 0.2rem;
        cursor: pointer;
        font-weight: bold;
      }
    }

    &__search-button {
      position: relative;
      top: -90%;
      left: 85%;
      width: 3.5rem;
      height: 3.5rem;
      background: none;
      border: none;
      z-index: 1000;
      &:hover {
        cursor: pointer;
        transform: scale(120%);
      }
      &__div {
        width: 100%;
        height: 100%;

        & img {
          height: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .container {
        top: -20%;
        left: -30%;
        clear: both;
    }
  }

  @media screen and (max-width: 400px) {
    .container {
      transform: scale(80%);
      left: 7%;
    }
  }



</style>
