import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Navbar from "./navbar"
import './layout.css'
import SEO from '../components/seo'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `wedding`]} />
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        {/* <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} /> */}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
