import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import { rhythm, scale } from '../utils/typography'
import '../utils/global.css'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import Header from './header.js'
import Footer from './footer.js'


export default ({ children, location }) => (
  <div
    style = {{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.1s ease-out, background 0.2s ease-out',
    }}
  >
    <Header />  
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
    <Footer />
  </div>
)