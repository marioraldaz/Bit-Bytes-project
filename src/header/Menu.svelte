<script>
  import Nav from "./Nav.svelte";
  export let navVisibility = false;
  export let onClick = () => {
    navVisibility = navVisibility
      ? (navVisibility = false)
      : (navVisibility = true);
  };
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

{#if navVisibility}
  <Nav />
{/if}

<style lang="scss">
  @use "sass:math";

  .header_menu {
    position: relative;
    display: inline-block;
    height: 100%;
    margin: 1.5rem;
    .hamburguer-menu {
      display: inline-block;
      position: absolute;
      top: 0;
      height: 100%;
      border: none;
      width: 100%;
      background: none;
      cursor: pointer;
      .bar1,
      .bar2,
      .bar3 {
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
