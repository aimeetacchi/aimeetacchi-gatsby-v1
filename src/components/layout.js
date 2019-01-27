import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import Header from '../components/header'
import './layout.css'


// Footer Styles ===
const FooterStyle = styled.footer`
background-color: #3f72af;
color: #fff;
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
        <Header siteName={data.site.siteMetadata.siteName} />
        {children}
        <FooterStyle>
          {data.site.siteMetadata.author} | Front End Developer © {new Date().getFullYear()}, Built with
            {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterStyle>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
