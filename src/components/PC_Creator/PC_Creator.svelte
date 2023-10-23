<script>
    import PC_Creator from "../../stores/PC_Creator.js";
    import RAMs from "../RAMs/RAMs.json";
    import {onMount} from "svelte";
    let usedComponents = [];
    let arrayRAMs = RAMs.RAMs;
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