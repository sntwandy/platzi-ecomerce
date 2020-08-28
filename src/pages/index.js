import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo } from "../components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const description = data.allSite.edges[0].node.siteMetadata.description
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/thanks/">Go to thanks</Link>
      <Link to="/canceled/">Go to canceled</Link>
    </>
  )
}

export default IndexPage
