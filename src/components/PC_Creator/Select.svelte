<script>
    export let array=[]
</script>

    <select name="" on:change >
      {#each array as component}
          <option value={component.id}>{component.name}</option>
      {/each}
    </select> 

  <style lang="scss">
    select{
        width:100%;
        height: 100%;
        font-size: inherit;
    }


    select *{
            height:10rem;
            width:100%;
        }
  </style>