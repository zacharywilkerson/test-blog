const config = {
  gatsby: {
    // pathPrefix: '/blog/',
    siteUrl: 'https://calcprep.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    // logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://calcprep.com',
    title:
      "<a href='https://calcprep.com'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: '',
    // githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/calcprep" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/calcprep" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [
      { text: 'Blog', link: 'https://calcprep.com/' },
      { text: 'Resources', link: 'https://calcprep.com/' },
      { text: 'Tutoring', link: 'https://calcprep.com/' },
      { text: 'Contact', link: 'https://calcprep.com/contact' },
      { text: 'About Me', link: 'https://calcprep.com/about-me' },
    ],
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
      '/precalculus',
      '/calculus-1',
      '/calculus-2',
      '/calculus-3',
    ],
    collapsedNav: [
      '/blog/precalculus', // add trailing slash if enabled above
      '/blog/calculus-1',
      '/blog/calculus-2',
      // '/calculus-2/applications-of-integrals',
      // '/calculus-2/integration-techniques',
      '/blog/calculus-3',
    ],
    links: [
      // { text: 'CalcPrep - Home Page', link: 'https://hasura.io' },
      { text: 'Blog', link: 'https://calcprep.com' },
      { text: 'Resources', link: 'https://calcprep.com' },
      { text: 'Tutoring', link: 'https://calcprep.com' },
      { text: 'Contact', link: 'https://calcprep.com/contact' },
      { text: 'About Me', link: 'https://calcprep.com/about-me' },
    ],
    frontLine: false,
    ignoreIndex: true,
    title: "<a href='https://calcprep.com'>CalcPrep</a>",
    // "<a href='https://calcprep.com'>home</a><div class='greenCircle'></div><a href='https://calcprep.com'>tutoring</a><div class='greenCircle'></div><a href='https://calcprep.com'>blog</a>",
  },
  siteMetadata: {
    title: 'Calculus Blog | CalcPrep',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
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
