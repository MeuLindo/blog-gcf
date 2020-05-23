import React from "react"
import { Helmet } from "react-helmet"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default () => ( 
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
        return ( 
          <div>
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
                                color: 'white',
                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                textShadowOffset: {
                                  width: -1, 
                                  height: 1
                                },
                                textShadowRadius: 10
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
                    <div>
                      <ThemeToggler>
                        {({ theme, toggleTheme }) => (
                          <label>
                            <input
                              type="checkbox"
                              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                              checked={theme === 'dark'}
                            />{' '}
                            Dark mode
                          </label>
                        )}
                      </ThemeToggler>
                    </div>
                </BackgroundImage>
          </div>
        )
      }
    }
  />
)