import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    )
    const posts = get(this, 'props.data.allCosmicjsPosts.edges')
    const author = get(this, 'props.data.cosmicjsSettings.metadata')
    const location = get(this, 'props.location')
        
    return ( 
      <Layout location = { location } >
        <Helmet title = { siteTitle } />
        {/* <Bio settings = { author }/>  */}
        <h2 
          style={{
            textAlign: 'center',
            fontSize: rhythm(1.8),
            marginBottom: rhythm(1.8),
          }}
        >
          Se divirta!
        </h2>
        {
          posts.map(({ node }) => {
            const title = get(node, 'title') || node.slug
              return (
                <div 
                  key = { node.slug } 
                >
                  <h3 
                    style = {{
                      marginBottom: rhythm(0),
                    }}
                  >
                    <Link 
                      style = {{ 
                        boxShadow: 'none' 
                      }}
                      to = { `posts/${node.slug}` } > { title }
                    </Link>
                  </h3>
                  <div
                    style = {{
                      marginBottom: rhythm(.616),
                      fontSize: rhythm(0.5),
                    }}
                  > 
                    { node.created }
                  </div>
                  <p 
                    style = {{
                      textAlign: 'justify',
                    }}
                    dangerouslySetInnerHTML = {{
                      __html: node.metadata.description 
                    }}
                  >
                  </p>
                </div>
              )
          })
        }
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql `
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD/MM/YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`