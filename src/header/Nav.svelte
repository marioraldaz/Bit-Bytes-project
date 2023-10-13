<script>
  import NavElem from "./NavElem.svelte"
  import navElements from "./jsons/navElements.json"

  let arrayElements = navElements.Elements;

</script>

<nav class="menu-nav">
    {#each arrayElements as navEl}
      <NavElem name={navEl.name} logo={navEl.logo}/>
    {/each}
</nav>



<style lang="scss">
  .menu-nav{
    display: block;
    position:fixed;

    width:30%;
    min-height: 100vh;
    float:right;
    z-index:98;
    background-color: purple;
    transition:0.4s;

   
    .nav-elem{
      width: 100%;
      height: 50px;
      font-size:30px;
      a{
        color:white;
        text-decoration:none;  
      }
    }
  }
</style>