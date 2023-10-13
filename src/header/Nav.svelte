<script>
  import NavElem from "./NavElem.svelte"
  import navElements from "./jsons/navElements.json"
</script>

<nav class="menu-nav">
    <div class="nav-elem"><a href="#"> RAM </a></div>
    <div class="nav-elem"><a href="#"> PLACAS </a></div>
</nav>



<style lang="scss">
  .menu-nav{
    display: block;
    position:fixed;

    width:50%;
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