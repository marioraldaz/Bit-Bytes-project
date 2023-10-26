<script>
  import Header from "./header/Header.svelte";
  import Body from "./body/Body.svelte";
  import Footer from "./footer/Footer.svelte";
  import Menus from "./stores/menus";
  import RAMs from "./components/RAMs/RAMs.svelte";
  import PC_Creator from "./components/PC_Creator/PC_Creator.svelte";
  import Results from "./header/Results.svelte";
  import searching from "./stores/searching";


  import { onMount } from "svelte";
  let active = "";
  let activeSearch=false;
  onMount(() => {
    return Menus.subscribe((data) => {
      active = data.active;
    });
  });

  onMount(() => {
    return searching.subscribe((data) => {
      activeSearch = data.active;
    });
  });
  
</script>

<div class="container">
  <Header />

  {#key active}
    {#if activeSearch}
      <Results/>
    {:else}
      {#if active == "Body"}
        <Body />
      {:else if active == "RAMs"}
        <RAMs />
      {:else if active == "PC_Creator"}
        <PC_Creator />
      {/if}
    {/if}
  {/key}

  <Footer />
</div>

<style lang="scss">

  @import "./variables";


</style>
