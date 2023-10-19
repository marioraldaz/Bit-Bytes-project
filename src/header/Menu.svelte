<script>
  import Nav from "./Nav.svelte";
  export let navVisibility = false;
  export let onClick = () => {  navVisibility = navVisibility ? navVisibility=false : navVisibility=true
    console.log(navVisibility);
  }
  import RAMs from "../components/RAMs/RAMs.svelte";
  let seeRAMs=false;

</script>

  <div class="header_menu">
    <button class="hamburguer-menu" on:click={onClick}>
      <div class="bar-container">
        <div class="bar1"/>
        <div class="bar2"/>
        <div class="bar3"/>
    </div>
    </button>
  </div>

  {#if navVisibility}
    <Nav />
  {/if}

  {#if seeRAMs}
    <RAMs />
  {/if}
<style lang="scss">
  @use "sass:math";

  .header_menu {
    position: relative;
    display: inline-block;
    width:300px;
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
        width: 55px;
        height: 10px;
        margin-bottom: 8px;
        border-radius: 20px;
        display: block;
        background: linear-gradient(60deg,rgb(176, 32, 229) 25%,rgb(94, 176, 208));       
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
        left:35%;
        font-size:30px;
        
        a{
          text-decoration: none;
        }
      }
  }
</style>
