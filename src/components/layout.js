import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import MyProvider from './MyProvider'

import styled from 'styled-components'
import Header from '../components/header'
import './layout.scss'


// Footer Styles ===
const FooterStyle = styled.footer`
/* background-color: ${props =>
    (props.theme.primary && '$primary') || (props.theme.danger && '$danger')
  }; */
color: #f1f1f1;
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
      <MyProvider>
        <>
          <Header siteName={data.site.siteMetadata.siteName} />
          {children}
          <FooterStyle danger>
            {data.site.siteMetadata.author} | Front End Developer © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </FooterStyle>
        </>
      </MyProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
