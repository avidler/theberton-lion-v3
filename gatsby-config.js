// Gatsby settings for the environment variables
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: process.env.GA_TRACKING_ID
            }
          },
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
    
};
