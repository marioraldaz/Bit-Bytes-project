<script>
  import Header from "./header/Header.svelte"
  import Body from "./body/Body.svelte"
  import Footer from "./footer/Footer.svelte"
  import Menus from "./stores/menus"
  import RAMs from "./components/RAMs/RAMs.svelte"
  let active="Body"
</script>

<div class="container">

  <Header />
  
  {#if active="Body"}
    <Body/>
    {:else if active="RAMs"}
      <RAMs/>
  {/if}
  <Footer/>

</div>


<style>

</style>
