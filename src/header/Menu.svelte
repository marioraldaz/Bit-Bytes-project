<script>
  import Nav from "./Nav.svelte";

  let navVisibility = false;
</script>

<div class="header_menu">
  <button class="hamburguer-menu" on:click={() => navVisibility == true}>
    <div class="bar" />
    <h1 class="menu-text">Menu</h1>
  </button>
  {#if navVisibility}
    <Nav />
  {/if}
</div>

<style lang="scss">
  .header_menu {
    position: relative;
    display: inline-block;
    width: 130px;
    margin-left: 10px;
    .hamburguer-menu {
      height: 100%;
      width: 100%;
      border: none;
      background: none;
      cursor: pointer;
      &:hover {
        .menu-text {
          display: inline-block;
        }
      }

      & .bar,
      &:after,
      &:before {
        content: "";
        display: block;
        width: 45px;
        height: 8px;
        background-color: red;
        transition: 0.4s;
        border-radius: 20px;
        margin-top: 6px;
      }

      &.is-active:before {
        transform: rotate(-45deg) translate(-9px, 6px);
      }
      &.is-active:after {
        transform: rotate(45deg) translate(-8px, -8px);
      }

      .menu-text {
        display: none;
        float: right;
        margin-bottom: 20px;
      }
    }
  }
</style>
