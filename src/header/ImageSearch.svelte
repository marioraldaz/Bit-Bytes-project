<script>
  export let urlImage = "";
</script>

<button class="search-button" on:click>
  <img alt="logo" src={urlImage} />
</button>

<style lang="scss">
  .search-button {
    position: relative;
    background: none;
    border: none;
    z-index: 1000;
    & :hover {
      cursor: pointer;
      transform: scale(120%);
    }
    & img{
      width: 3.5rem;
    }
  }

  @media screen and (max-width:600px){
    .search-button{
     & img {
      width: 2.5rem;
      margin-top: .5rem;
    }
    }
  }
</style>
