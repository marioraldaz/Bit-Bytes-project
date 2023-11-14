<script>
  export let nStars;
  let stars = [];
  for (let i = 1; i <= nStars; i++) {
    stars.push("images/star.png");
  }
  for (let i = nStars + 1; i <= 5; i++) {
    stars.push("images/empty_star.png");
  }
</script>

<div class="container">
  {#each stars as star}
    <img src={star} alt="star" class="container__star" />
  {/each}
</div>

<style lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background: none;
    &__star {
      float: left;
      height: 100%;
      width: 20%;
    }
  }
</style>
