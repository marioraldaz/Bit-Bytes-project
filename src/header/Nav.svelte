<script>
  import NavElem from "./NavElem.svelte";
  import Menus from "../stores/menus.js";
  import { onMount } from 'svelte';

  let menus=[];

  onMount(()=>{
    return Menus.subscribe((data)=>{
    menus=data.menus;
    });
  });
</script>


<nav class="menu-nav">
  {#each menus as navEl}
    {#if navEl.name=="Body"}
        <span></span>
    {:else}
        <NavElem name={navEl.name} logo={navEl.logo} />
    {/if}
  {/each}
</nav>

<style lang="scss">

  @media screen and (min-width: 1100px) {
    .menu-nav {
    margin-top: 6rem;
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
    }


    .menu-nav {
    margin-top: 6rem;
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
    width: 22%;

    }
    }

    @media screen and (max-width: 600px) {
      .menu-nav {
    width: 22%;

    }
  }
</style>
