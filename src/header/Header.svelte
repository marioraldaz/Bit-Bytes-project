<script>
  import Menu from "./Menu.svelte";
  import Carrito from "./Trelly.svelte";
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
      <a href="/#" on:click={onClick}>Home</a>
    </div>
  {/if}

  <div class="header__right">
    <Carrito />
    <Usuario />
    <SearchBar/>
  </div>
</div>

<style lang="scss">
  .header__right{
    float: right ;
    width: 40%;

  }
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
      height: inherit;
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
      font-size: 3rem;
      top: 25%;
      left: 12%;
      padding: 0.5rem;
      border-radius: 2rem;
      border: 0.2rem solid rgb(176, 32, 229);
      a {
        color: black;
        text-decoration: none;
      }

      &:hover {
        transform: scale(120%);
        background-color: lightblue;
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


  @media screen and (max-width: 1100px) {
    .header {
      &__home {
        font-size: 1.8rem;
        top: 30%;
        left: 15%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .header {
      &__home {
        font-size: 2rem;
        top: 30%;
        left: 20%;
      }
    }
  }
</style>
