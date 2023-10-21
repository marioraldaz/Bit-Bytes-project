<script>
  import Header from "./header/Header.svelte"
  import Body from "./body/Body.svelte"
  import Footer from "./footer/Footer.svelte"
  import Menus from "./stores/menus"
  import RAMs from "./components/RAMs/RAMs.svelte"
  import { onMount } from "svelte"
  let active=""

  onMount(()=>{
    return Menus.subscribe((data)=>{
      active = data.active;
    });
  });



</script>

<div class="container">

  {#key active}
    <Header />
    
    {#if active=="Body"}
      <Body/>
      {:else if active=="RAMs"}
        <RAMs/>
    {/if}

    <Footer/>
  {/key}

</div>


<style>

</style>
