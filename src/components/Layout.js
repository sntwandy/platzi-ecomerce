/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/Components"

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <main>{children}</main>
      <Footer>
        made 💚 by:
        <a href="https://www.twitter.com/@sntwandy" target="_blank">
          @sntwandy
        </a>
      </Footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
