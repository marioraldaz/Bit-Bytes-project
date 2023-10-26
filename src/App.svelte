<script>
  import Header from "./header/Header.svelte";
  import Body from "./body/Body.svelte";
  import Footer from "./footer/Footer.svelte";
  import Menus from "./stores/menus";
  import RAMs from "./components/RAMs/RAMs.svelte";
  import PC_Creator from "./components/PC_Creator/PC_Creator.svelte";
  import ResultsPage from "./header/ResultsPage.svelte";
  import { onMount } from "svelte";
  let active = "";

  onMount(() => {
    return Menus.subscribe((data) => {
      active = data.active;
      console.log(active);
    });
  });
</script>

<div class="container">
  <Header />

  {#key active}
    {#if active == "Body"}
      <Body />
    {:else if active == "RAMs"}
      <RAMs />
    {:else if active == "PC Creator"}
      <PC_Creator />
    {:else if active == "ResultsPage"}
      <ResultsPage />
    {/if}
  {/key}

  <Footer />
</div>

<style lang="scss">

  @import "./variables";


</style>
