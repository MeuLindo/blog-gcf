import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import { rhythm, scale } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import Head from './head.js'

export default ({ children, location }) => ( 
  <StaticQuery query = { graphql `
    query LayoutQuery {
      cosmicjsSettings(slug: { eq: "general" }) {
        metadata {
          site_heading
          homepage_hero {
            local {
              childImageSharp {
                fluid(
                  quality: 90, 
                  maxWidth: 1920,
                  duotone: {
                    highlight: "#f0960e",
                    shadow: "#0e77f0",
                    opacity: 61
                  }
                ){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          logodda {
            local {
              childImageSharp{
                fluid(quality: 90, maxWidth: 300,){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `}
    render = {
      data => {
        const siteTitle = data.cosmicjsSettings.metadata.site_heading
        const homgePageHero = data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid
        const logoDDA = data.cosmicjsSettings.metadata.logodda.local.childImageSharp.fluid
        let header
        let rootPath = `/`
        let postsPath = `/posts`
            
        header = ( 
          <BackgroundImage 
            Tag = "div"
            className = "post-hero"
            fluid = { homgePageHero }
            style = {{
              height: rhythm(24),
              position: 'relative',
              marginBottom: `${rhythm(1.1618)}`,
            }}
          >
            <div 
              className = 'logo'
              style = {{
                maxWidth: 150,
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: `${rhythm(1.1618)}`,
              }}
            >
              <Img 
                fluid = { logoDDA }
                alt = 'Logomarca Dia do Arauto'
              /> 
            </div> 
            <h1
              style = {{
                ...scale(1.3),
                  position: 'absolute',
                  textAlign: 'center',
                  left: 0,
                  right: 0,
                  top: rhythm(10),
                  marginTop: '0',
                  height: rhythm(2.5),
                  color: 'white'
              }}
            >
              <Link 
                style = {{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to = { '/' } > { siteTitle } 
              </Link>
            </h1>
          </BackgroundImage>
        )
        return ( 
          <div>
            <Head />
            { header }  
              
            <div 
              style = {{
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: rhythm(25),
                padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
                minHeight: '100vh',
              }}
            >
              
              { children }
            </div> 
            <footer 
              style = {{
                textAlign: 'center',
                padding: `0 20px 80px 0`,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <p>
                Desenvolvido orgulhosamente por &nbsp
                  <a 
                    target = "_blank"
                    href = "https://diadoarauto.com.br"
                    style = {{
                      color: 'orange',
                      boxShadow: 'none',
                    }}
                  >
                    <strong>
                      Dia do Arauto. 
                    </strong>
                  </a>
                Todos os direitos reservados © {new Date().getFullYear()}
              </p>
            </footer>
          </div>
        )
      }
    }
  />
)