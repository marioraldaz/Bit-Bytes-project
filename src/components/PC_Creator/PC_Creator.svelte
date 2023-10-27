<script>
    import PC_Creator from "../../stores/PC_Creator.js";
    import {getComponent} from   "../productsScript";
    import {onMount} from "svelte";
    let usedComponents = [];
    let arrayCPUs = getComponent("CPUs");
    let arrayRAMs = getComponent("RAM");
    let arrayMotherBoards = getComponent("MotherBoards");
    let arraySSDs = getComponent("SSD");
    let arrayCases = getComponent("PC_Case");

    onMount(()=>{
    return PC_Creator.subscribe((data)=>{
      usedComponents = data.usedComponents;
    });
  });

</script>

<div class="cuerpo">
  <h1 class="title">PC Creator</h1>

  <select class="MotherBoards">
    {#each arrayMotherBoards as component}
        <option value={component.name}>{component.name}</option>
    {/each}
  </select>

  <select class="Graphics">
    {#each arrayRAMs as component}
        <option value={component.name}>{component.name}</option>
    {/each}
</select>

  <select class="CPUs">
    {#each arrayCPUs as component}
        <option value={component.name}>{component.name}</option>
    {/each}
  </select>

  <select class="RAMs">
      {#each arrayRAMs as component}
          <option value={component.name}>{component.name}</option>
      {/each}
  </select>

  <select class="SSDs">
  {#each arraySSDs as component}
      <option value={component.name}>{component.name}</option>
  {/each}
  </select>

  
</div>

<style lang="scss">
.cuerpo{
  position: relative;
  margin-top: 9rem;
  text-align: center;
  font-size: 3rem;
}
</style>