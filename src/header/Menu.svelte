<script>
  import NavElem from "./Nav.svelte";
  import Nav from "../stores/nav.js";
  import { onMount } from 'svelte';
  export let visibility=false;


  function onClick(){
    Nav.update((data)=>{
      console.log("1:",visibility)
      visibility=!visibility;
      data.visibility=visibility;
      console.log("2:",visibility)
      return data;
    });
  }

  onMount(()=>{
    return Nav.subscribe((data)=>{
    visibility=data.visibility;
    });
  });

</script>

<div class="header_menu">
  <button class="hamburguer-menu" on:click={onClick}>
    <div class="bar-container">
      <div class="bar1" />
      <div class="bar2" />
      <div class="bar3" />
    </div>
  </button>
</div>


{#if visibility}
  <NavElem />
{/if}

<style lang="scss">
  @use "sass:math";
  @import "../variables.scss";

  .header_menu {
    position: relative;
    display: inline-block;
    height: 100%;
    width:5.5rem;
    margin: 1.5rem;
    .hamburguer-menu {
      display: inline-block;
      position: absolute;
      top: 0;
      background: none;
      height: 100%;
      width:100%;
      border: none; 
      width: 100%;
      cursor: pointer;
      .bar1,
      .bar2,
      .bar3 {
        width: 100%;
        height: 1rem;
        margin-bottom: 0.8rem;
        border-radius: 2rem;
        display: block;
        background: linear-gradient(
          60deg,
          rgb(176, 32, 229) 25%,
          rgb(94, 176, 208)
        );
      }
    }

    &:hover {
      .bar1,
      .bar2,
      .bar3 {
        transform: scale(120%);
        margin-bottom: 1rem;
      }
    }
  }
</style>