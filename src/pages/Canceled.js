import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/Components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <div>
      <SEO title="canceled purchase" />
      <Purchase>
        <h2>
          Canceled purchase
          <span rol="img" aria-label="emoji">
            💔
          </span>
        </h2>
        <p>We're so sorry for that.</p>
        <p>I hope that you will purchase anything else.</p>
        <span role="img" aria-label="emoji">
          🥺
        </span>
        <Link to="/">
          <Button>Back to the catalog</Button>
        </Link>
      </Purchase>
    </div>
  )
}
