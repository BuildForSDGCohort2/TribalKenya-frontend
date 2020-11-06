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
          apiKey: 'AIzaSyB8BPdGFKdFvT8GnUfNs6wM6Zko66fCFfc',
          authDomain: 'tribalkenya-78cfa.firebaseapp.com',
          databaseURL: 'https://tribalkenya-78cfa.firebaseio.com',
          projectId: 'tribalkenya-78cfa',
          storageBucket: 'tribalkenya-78cfa.appspot.com',
          messagingSenderId: '998143895886',
          appId: '1:998143895886:web:803fd06de3e16793f2961f',
          measurementId: 'G-DJWP5851WT',
          analytics: true
        }
      }
    }
  ]
};
