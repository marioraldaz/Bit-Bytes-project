<script>
    import Menus from "../stores/menus.js";
    import { onMount } from "svelte";
    let name="PC_Creator";

    function onClick(){
    return Menus.update((data) =>{
      data.active = name;
      return data;
    });
  };

    onMount(()=>{
    return Menus.subscribe((data)=>{
    });
    });
</script>



<div class="container">
    <button class="button" on:click={onClick}>
        <h2 class="title">Create your own PC</h2>
    </button>
</div>  



<style lang="scss">
    .container{
        background-color: none;

        .button{
            width: 100%;
            height: 100%;
            padding:0.4rem;
            border-radius: 2rem;
            border-color:red;
        }
    }

</style>