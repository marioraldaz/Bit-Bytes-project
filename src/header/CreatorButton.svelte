<script>
    import PC_Creator from "../stores/PC_Creator.js";
    import { onMount } from "svelte";
    import PC_Creator_Elem from "../components/PC_Creator/PC_Creator.svelte"
    let open=false;

    function onClick() {
        open=true;
    }

    onMount(()=>{
    return PC_Creator.subscribe((data)=>{
      open = data.open;
    });
    });
</script>



<div class="container">
    <button class="button" on:click={onClick}>
        <h2 class="title">Create your own PC</h2>
    </button>

    {#if open}
        <PC_Creator_Elem/>
    {/if}
  
</div>  



<style lang="scss">
    .container{
        background-color: none;

        .button{
            width: 100%;
            height: 100%;
            padding:4px;
            border-radius: 20px;
            border-color:red;
        }
    }

</style>