module.exports = {
    plugins: [
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-dark-mode',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                stripMetadata: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-cosmicjs',
            options: {
                bucketSlug: 'blog-gcf',
                objectTypes: ['posts', 'settings'],
                apiAccess: {
                    read_key: 'laoHlsxw9a8Ht0zo8y4gZBNBPa05geItopgyNQYeLSDw3DKGI2',
                },
                localMedia: true
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // In your gatsby-transformer-remark plugin array
                plugins: [{
                    resolve: 'gatsby-remark-a11y-emoji',
                    resolve: 'gatsby-remark-emojis',
                    options: {
                        // Deactivate the plugin globally (default: true)
                        active : true,
                        // Add a custom css class
                        class  : 'emoji-icon',
                        // In order to avoid pattern mismatch you can specify
                        // an escape character which will be prepended to the
                        // actual pattern (e.g. `#:poop:`).
                        escapeCharacter : '#', // (default: '')
                        // Select the size (available size: 16, 24, 32, 64)
                        size   : 64,
                        // Add custom styles
                        emojiConversion: 'shortnameToUnicode',
                        ascii: false,
                        styles : {
                            display      : 'inline',
                            margin       : '0',
                            'margin-top' : '1px',
                            position     : 'relative',
                            top          : '5px',
                            width        : '25px'
                        }
                    }
                }],
            }
        },
    ],
}