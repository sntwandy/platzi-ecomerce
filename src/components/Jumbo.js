import React from "react"
import { StyledJumbo } from "../styles/components"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best exclusive and special of Platzi!</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}
