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
import Header from './header.js'

export default ({ children, location }) => ( 
  
          <div>
            <Header/>  
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