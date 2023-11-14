<script>
  export let urlImage = "";
</script>

<button class="search-button" on:click>
  <img alt="logo" src={urlImage} />
</button>

<style lang="scss">
  .search-button {
    position: relative;
    right: 0;
    background: none;
    border: none;
    z-index: 1000;
    & :hover {
      cursor: pointer;
      transform: scale(120%);
    }
    & img {
      width: 3.5rem;
    }
  }
</style>
