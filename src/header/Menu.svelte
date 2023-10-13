<script>
  import Nav from "./Nav.svelte";

  export let navVisibility = false;
  export let onClick = () => {  navVisibility = navVisibility ? navVisibility=false : navVisibility=true
    console.log(navVisibility);
  }

</script>

  <div class="header_menu">
    <button class="hamburguer-menu" on:click={onClick}>
      <div class="bar1"/>
      <div class="bar2"/>
      <div class="bar3"/>
    </button>
    <h2 class="menu-text">Componentes</h2>
  </div>

  {#if navVisibility}
    <Nav />
  {/if}

<style lang="scss">
  @use "sass:math";

  .header_menu {
    position: relative;
    display: inline-block;
    width:240px;
    height: 100%;
    margin-left: 10px;
    .hamburguer-menu {
      display:inline-block;
      position:absolute;
      top:0;
      height: 100%;
      border:none;
      width: 100%;
      background: none;
      cursor: pointer;
      .bar1, .bar2, .bar3{
        width: 45px;
        height: 8px;
        margin-bottom: 6px;
        border-radius: 20px;
        background-color: red;
        display: block;
      }
    }
    &:hover {
        .menu-text {
          opacity:100;
        }
      }
      .menu-text{
        position: absolute;
        margin:0;
        padding: 0;;
        opacity: 0;
        top:20%;
        left:25%;
      }
  }
</style>
