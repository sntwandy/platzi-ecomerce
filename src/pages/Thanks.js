import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/Components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <div>
      <SEO title="successful purchase" />
      <Purchase>
        <h2>
          Sucessful purchase
          <span role="img" aria-label="emoji">
            💚
          </span>
        </h2>
        <p>Enjoy your swag!</p>
        <p>We'll wait for you, remember never stop learning!</p>
        <span role="img" aria-label="emoji">
          😄
        </span>
        <Link to="/">
          <Button>Back to the catalog</Button>
        </Link>
      </Purchase>
    </div>
  )
}
