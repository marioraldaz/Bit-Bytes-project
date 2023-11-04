<script>
  import NavElem from "./NavElem.svelte";
  import Menus from "../stores/menus.js";
  import { onMount } from "svelte";
  import { clickOutside } from "../scripts/clickOutside.js";
  import Nav from "../stores/nav.js";
  let visibility = false;
  let menus = [];

  onMount(() => {
    return Menus.subscribe((data) => {
      menus = data.menus;
    });
  });

  onMount(() => {
    return Nav.subscribe((data) => {
      visibility = data.visibility;
    });
  });

  function hide() {
    Nav.update((data) => {
      data.visibility = false;
      return data;
    });
  }
</script>

<nav class="menu-nav" use:clickOutside on:click_outside={hide}>
  {#each menus as navEl}
    {#if navEl.name == "Body"}
      <span />
    {:else}
      <NavElem name={navEl.name} logo={navEl.logo} />
    {/if}
  {/each}
</nav>

<style lang="scss">
  .menu-nav {
    margin-top: 1rem;
    display: block;
    position: fixed;
    border: 0.1rem solid rgb(94, 176, 208);
    width: 20%;
    min-height: 100vh;
    float: right;
    z-index: 98;
    background: linear-gradient(
      60deg,
      rgb(176, 32, 229) 25%,
      rgb(94, 176, 208)
    );
    transition: 0.4s;
  }

  @media screen and (max-width: 1100px) {
    .menu-nav {
      margin-top: 2.9rem;
      width: 22%;
    }
  }

  @media screen and (max-width: 600px) {
    .menu-nav {
      margin-top: 2.3rem;
      width: 42%;
    }
  }
</style>
