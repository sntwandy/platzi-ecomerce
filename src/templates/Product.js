import React from "react"
import { ProductDetails } from "../components"

export default function Product({ pageContext }) {
  return <ProductDetails {...pageContext} />
}
