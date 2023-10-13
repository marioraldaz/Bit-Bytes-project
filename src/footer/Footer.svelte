<script>
  let footerData = [
    {
      title: 'Company',
      links: [
        { text: 'About us', url: '#' },
        { text: 'Our services', url: '#' },
        { text: 'Privacy policy', url: '#' },
        { text: 'Affiliate program', url: '#' }
      ]
    },
    {
      title: 'Get help',
      links: [
        { text: 'FAQ', url: '#' },
        { text: 'Shipping', url: '#' },
        { text: 'Returns', url: '#' },
        { text: 'Order status', url: '#' },
        { text: 'Payment options', url: '#' }
      ]
    },
    {
      title: 'Online shop',
      links: [
        { text: 'Watch', url: '#' },
        { text: 'Bag', url: '#' },
        { text: 'Components', url: '#' }
      ]
    },
    {
      title: 'Follow us',
      socialMedia: [
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-twitter', url: '#' },
        { icon: 'fab fa-instagram', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' }
      ]
    }
  ];
</script>

<main>
  <footer class="footer">
    <div class="footer-content">
      <div class="row">
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
    </div>
  </footer>
</main>