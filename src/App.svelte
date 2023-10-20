<script>
  import Header from "./header/Header.svelte"
  import Body from "./body/Body.svelte"
  import Footer from "./footer/Footer.svelte"
  import Menus from "./stores/menus"
  let active="Body"
</script>

<div class="container">

  <Header />
  
  {#if active="Body"}
    <Body/>
  {/if}
  <Footer/>

</div>


<style>

</style>
