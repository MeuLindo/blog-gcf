import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(
            this,
            'props.data.cosmicjsSettings.metadata.site_title'
        )
        const location = get(this, 'props.location')

        return ( 

            <Layout location = { location } >
                <Helmet title = { siteTitle } />

            </Layout>

        )
    }           
}


export default BlogIndex

export const query = graphql`
  {
    cosmicjsSettings {
      metadata {
        site_title
      }
    }
  }
`