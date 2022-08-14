const config = {
  gatsby: {
    pathPrefix: '/docs',
    siteUrl: 'https://ncku-study.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://ncku-study.github.io/docs',
    title: '',
    githubUrl: 'https://github.com/ncku-study/ncku-study',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://discord.com/invite/RDMEsrHfAx" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: 'NCKU STUDY ・ 成功大學學業分享', link: 'https://nckustudy.com/' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://hasura.io' }],
    frontLine: false,
    ignoreIndex: true,
    title: null,
  },
  siteMetadata: {
    title: 'NCKU-study Docs',
    description: 'Documentation for NCKU-study',
    ogImage: null,
    docsLocation: 'https://github.com/ncku-study/docs/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
