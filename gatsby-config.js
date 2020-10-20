/* eslint-disable line-comment-position */
/* eslint-disable no-inline-comments */
/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
module.exports = {
  siteMetadata: {
    title: 'Tribal Kenya',
    description: 'Even though Tourism in Kenya is a billion dollar industry, it has been picking up on e-tourism very slowly and so my main goal is to enhance E-tourism in my country.',
    author: 'Abdulwadud Mahamad'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tribal-kenya',
        short_name: 'tribalkenya',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/flag1.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyCQc0KombCHi0hZBKSF0vT_ZhWV1BiOoKo',
          authDomain: 'tribalkenya-ff470.firebaseapp.com',
          databaseURL: 'https://tribalkenya-ff470.firebaseio.com',
          projectId: 'tribalkenya-ff470',
          storageBucket: 'tribalkenya-ff470.appspot.com',
          messagingSenderId: '812549061912',
          appId: '1:812549061912:web:a2fd9c25d99b4ebef7f26d',
          measurementId: 'G-L2VF3SHGJ0'
        }
      }
    }
  ]
};
