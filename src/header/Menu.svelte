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

<div class="menu">
  <button class="menu__logo" on:click|preventDefault={onClick} >
    <div class="menu__logo__container">
      <div class="menu__logo__container__bar1" />
      <div class="menu__logo__container__bar2" />
      <div class="menu__logo__container__bar3" />
    </div>
  </button>
</div>

{#if visibility}
  <NavElem />
{/if}

<style lang="scss">
  @use "sass:math";
  @import "../variables.scss";

  .menu {
    position: relative;
    display: inline-block;
    height: 100%;
    margin: 1.5rem;
    &__logo {
      display: inline-block;
      position: absolute;
      top: 0;
      height: 1rem;
      width:5.5rem;
      border: none; 
      width: 100%;
      background: none;
      cursor: pointer;

      &__container{
        &__bar1,
        &__bar2,
        &__bar3 {
          width: 5.5rem;
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

        &:hover {
          &__bar1,
          &__bar2,
          &__bar3 {
            transform: scale(120%);
            margin-bottom: 1rem;
          }
        }
      }   
    }
  }
</style>
