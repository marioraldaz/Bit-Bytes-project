<script>
  import MotherBoards from "./components/MotherBoads/MotherBoards.svelte";
  import Header from "./header/Header.svelte";
  import Body from "./body/Body.svelte";
  import Footer from "./footer/Footer.svelte";
  import Menus from "./stores/menus";
  import RAMs from "./components/RAMs/RAMs.svelte";
  import SSDs from "./components/SSDs/SSDs.svelte";
  import CPUs from "./components/CPUs/CPUs.svelte";
  import GPUs from "./components/GPUs/GPUs.svelte";
  import PC_Creator from "./components/PC_Creator/PC_Creator.svelte";
  import ResultsPage from "./header/ResultsPage.svelte";
  import { onMount } from "svelte";
  let active = "";

  onMount(() => {
    return Menus.subscribe((data) => {
      active = data.active;
    });
  });
</script>

<div class="container">
  <Header />

  <div class="container__body">
      {#key active}
    {#if active == "Body"}
      <Body />
    {:else if active == "RAMs"}
      <RAMs />
    {:else if active == "SSDs"}
      <SSDs />
    {:else if active == "CPUs"}
      <CPUs />
    {:else if active == "Motherboards"}
      <MotherBoards />
    {:else if active == "GPUs"}
      <GPUs />
    {:else if active == "PC Creator"}
      <PC_Creator />
    {:else if active == "ResultsPage"}
      <ResultsPage />
    {/if}
  {/key}
  </div>


  <div class="container__footer">

    <Footer />
  </div>
</div>

<style lang="scss">
  @import "./variables";
  .container{
    height: 100%;
    width:100%;
    position:relative;
    &__header{
      width:100%;
      height: 20%;
    }
    &__footer{
      width:100%;
      position: absolute;
      margin-top:100%;
    }
    &__body{
      width:100%;
    }
  }
</style>
