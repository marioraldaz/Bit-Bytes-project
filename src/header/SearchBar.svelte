
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
        item.length == 0 ? (data.products = output) : (data.products = item);
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
    <ImageSearch on:click={hiddenSearch} urlImage="../images/search_logo.png" />
  </div>
{:else}
  <div class="container" use:clickOutside on:click_outside={hiddenSearch}>
    <div class="container__searchBar">
      <input
        type="search"
        class="container__searchBar--input"
        placeholder="   Search for amazing components"
        bind:value={userInput}
      />

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
            on:click={showSearchResults([item])}
          >
            <img
              src={item.logo}
              class="container__results__elem__img"
              alt="img"
            />
            {item.name}</button
          >
        {/each}
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .header__searchBar {
    float: right;
    position: relative;
    top: 27%;
    left: -5%;
    height: auto;
  }

  .container {
    position: relative;
    top: -10%;
    width: 45rem;
    height: 5rem;
    transform: translate(0%, 50%);
    float: right;

    transition: all 2s ease-out;

    &__results {
      transition: all .5s ease-out;
      width: 150%;
      margin-top: 1rem;
      float: right;
      transform: translateX(13rem);
      &__title {
        width: 100%;
        background-color: white;
        font-size: 2rem;
        color: rgb(94, 176, 208);
        border: 2px solid black;
      }
      &__elem {
        width: 100%;
        height: 14rem;
        background-color: white;
        float: inline-end;
        font-size: 2.5rem;
        font-family: "Courier New", Courier, monospace;
        font-weight: 800;
        border: 1px solid black;
        &:hover {
          cursor: pointer;
          background-color: azure;
        }

        &__img {
          float: left;
          height: 90%;
          width: 20%;
        }
      }
    }

    &__searchBar {
      position: relative;
      float: right;
      width: 80%;
      height: 100%;
      border-radius: 2rem;
      background-color: red;
      transition: all .5s ease-out;
      &:hover {
        transform: scale(110%);
      }

      &--input {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0.2rem dotted rgb(0, 0, 0);
        border-radius: 2rem;
        padding-left: 3rem;

        &:focus {
          border: 0.3rem dotted rgb(0, 0, 0);
          outline: none;
        }
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
      z-index: 100;
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

  @media screen and (max-width: 1600px) {
    .container{
      clear: both;
      left: -30%;
    }
  }

  @media screen and (max-width: 1100px) {
    .container{
      &__results {
      width: 120%;
      transform: translateX(5rem);
      }
    }
  }

  @media screen and (max-width: 600px) {
    .container{
      &__searchBar{
        top:50%;
        margin-bottom:5%;
      }
      &__results {
      width: 90%;
      transform: translateX(2rem);
      }
    }
  }
</style>