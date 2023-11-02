<script>
    export let array=[]
</script>

    <select data-prueba="dsad" on:change >
      <option disabled selected value> -- select an option -- </option>
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