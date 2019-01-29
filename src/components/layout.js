import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import Header from '../components/header'
import './layout.scss'

// Extract our Sass variables into a JS object
const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./vars.scss');



// Footer Styles ===
const FooterStyle = styled.footer`
background-color: ${props =>
    (props.theme.primary && '$primary') || (props.theme.danger && '$danger')
  };
color: $color_one;
font-size: .7em;
padding: 5em 0;
text-align: center;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteName,
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={theme}>
          <Header siteName={data.site.siteMetadata.siteName} />
          {children}
          <FooterStyle danger>
            {data.site.siteMetadata.author} | Front End Developer © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </FooterStyle>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
