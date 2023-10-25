<script>
  import Menu from "./Menu.svelte";
  import Carrito from "./Carrito.svelte";
  import Usuario from "./Usuario.svelte";
  import SearchBar from "./SearchBar.svelte";
  import Menus from "../stores/menus.js";
  import { onMount } from "svelte";

  let active = "";

  onMount(() => {
    return Menus.subscribe((data) => {
      active = data.active;
    });
  });

  function onClick() {
    return Menus.update((data) => {
      data.active = "Body";
      return data;
    });
  }
</script>

<div class="header">
  <div class="header__left">
    <div class="header__left__Menu">
      <Menu />
    </div>

    <div class="header__logo">
      <a href="/"><img src="./images/logo.png" alt="logo.png" /></a>
    </div>
  </div>

  {#if active != "Body"}
    <div class="header__home">
      <a href="/#" on:click={onClick}>Go back to home page</a>
    </div>
  {/if}

  <div class="header__right">
    <Carrito />
    <Usuario />
    <SearchBar />
  </div>
</div>

<style lang="scss">
  .header {
    position: fixed;
    height: 8.2rem;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid black;
    animation: headerHeight;
    animation-duration: 4s;
    animation-timing-function: ease-out;
    z-index: 9999;

    &__left {
      height: inherit;
      display: inline-block;

      &__Menu {
        position: fixed;
      }
    }
    &__right {
      display: inline;
    }
    &__logo {
      display: inline-block;
      height: 8.2rem;
    }
    &__logo img {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      height: 100%;
      animation: introLogo;
      animation-duration: 2.5s;
      animation-timing-function: ease-in;
    }

    &__home {
      position: absolute;
      font-size: 2.5rem;
      top: 20%;
      left: 5%;
      border: 0.2rem solid rgb(176, 32, 229);
      padding: 1rem;
      border-radius: 2rem;
      a {
        color: black;
        text-decoration: none;
      }

      &:hover {
        transform: scale(120%);
        background-color: rgb(226, 167, 226);
      }
    }

    @keyframes headerHeight {
      0% {
        min-height: 100vh;
      }

      100% {
        min-height: 0;
      }
    }

    @keyframes introLogo {
      0% {
        opacity: 0;
        height: 50%;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
