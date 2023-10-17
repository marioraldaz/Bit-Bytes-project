<script>
   import Datos from './footerData.json';

   let footerData=Datos.Elements;
</script>

<footer class="footer">
  <div class="row">
    {#each footerData as section (section.title)}
      <div class="col-1-of-4">
        <h4>{section.title}</h4>
        <ul>
          {#each section.links as link (link.text)}
            <li><a href="{link.url}">{link.text}</a></li>
          {/each}
        </ul>
        {#if section.socialMedia}
          <div class="social-media">
            {#each section.socialMedia as social (social.icon)}
              <a href="{social.url}"><i class="{social.icon}"></i></a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</footer>

<style>

</style>
