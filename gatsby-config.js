module.exports = {
  siteMetadata: {
    title: 'Elasticsearch Talk by Ehsan Gazar',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-favicon',
    options: {
      logo: './src/assets/img/favicon.png',
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false,
      },
    },
  }],
};
