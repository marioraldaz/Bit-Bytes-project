<script>
    import PC_Creator from "../../stores/PC_Creator.js";
    import {getComponent} from   "../productsScript";
    import {onMount} from "svelte";
    let usedComponents = [];
    let arrayRAMs = getComponent("RAM");


    onMount(()=>{
    return PC_Creator.subscribe((data)=>{
      usedComponents = data.usedComponents;
    });
  });

</script>

<div class="cuerpo">
  <h1 class="title">PC Creator</h1>
  <select class="RAMs">
      {#each arrayRAMs as RAM}
          <option value={RAM.name}>{RAM.name}</option>
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