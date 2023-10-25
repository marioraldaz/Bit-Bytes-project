<script>
   import Datos from './footerData.json';
   let footerData=Datos.Elements;
</script>

<div class="footer">
  <div class="footer-content">
    <div class="footer-row">
      {#each footerData as section (section.title)}
        <div class="footer-col">
          <h4>{section.title}</h4>
          {#if section.links}
          <ul>
            {#each section.links as link (link.text)}
              <li><a href="{link.url}">{link.text}</a></li>
            {/each}
          </ul>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>

</style>
