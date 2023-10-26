<script>
    import PC_Creator from "../../stores/PC_Creator.js";
    import {getComponents} from   "../productsScript.js";
    import {onMount} from "svelte";
    let usedComponents = [];
    let arrayRAMs = getComponents("RAM");


    onMount(()=>{
    return PC_Creator.subscribe((data)=>{
      usedComponents = data.usedComponents;
    });
  });

</script>

<h1 class="title">PC Creator</h1>

<select class="RAMs">
    {#each arrayRAMs as RAM}
        <option value={RAM.name}>{RAM.name}</option>
    {/each}
</select>


<style lang="scss">

</style>