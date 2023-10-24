<script>

</script>

<div class="searchBar-container">
  <input class="searchBar" placeholder="   Search for amazing components" />
  <button class="search-button"></button>
  <img alt="search_logo" class="search_logo" src="search_logo.png"/>
</div>

<style lang="scss">
  .searchBar-container {
    float: right;
    transform: translate(0%, 50%);
    .searchBar {
      width: 100%;
      height: 40px;
      border: 2px solid violet;
      border-radius: 20px;

      &:hover {
        transform: scale(110%);
      }

      &:focus {
        border: 3 px solid violet;
        outline: none;
      }
    }
  }

</style>
