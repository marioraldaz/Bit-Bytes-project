<script>
  import { get } from 'svelte/store'
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
  .menu-nav {
    display: block;
    position: fixed;
    border: 1px solid rgb(94, 176, 208);
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
    .nav-elem {
      width: 100%;
      height: 50px;
      font-size: 30px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }


</style>
