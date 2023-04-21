import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Your Site Name',
                short_name: 'Short Name',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'https://raw.githubusercontent.com/eduardoEB-dev/Images/main/TotalElectricPro/favicon.png'
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ]
};

export default config;
