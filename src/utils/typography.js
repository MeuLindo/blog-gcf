import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'
import './global.css'

// import Wordpress2016 from 'typography-theme-wordpress-2016'

// Wordpress2016.overrideThemeStyles = () => ({
//   'a.gatsby-resp-image-link': {
//     boxShadow: 'none',
//   },
// })

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

const typography = new Typography(funstonTheme)

funstonTheme.overrideThemeStyles = () => ({
    
    // gatsby-remark-autolink-headers - don't underline when hidden
    'a.anchor': {
        boxShadow: 'none',
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
        stroke: 'var(--textLink)',
    },
    hr: {
        background: 'var(--hr)',
    },
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale