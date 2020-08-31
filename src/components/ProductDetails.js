import React, { useState, useContext } from "react"
import priceFormat from "../utils/PriceFormat"
import { CartContext } from "../Context"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/Components"
import { SEO, Stars } from "./"

export default function ProductDetails({
  id,
  unit_amount,
  product: { name, metadata },
}) {
  const price = priceFormat(unit_amount)
  const [size, setSize] = useState(2)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ id, name, unit_amount, metadata, quantity })
  }
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD: {price}</b>
        <Stars />
        {metadata.wear && <h3>Color: {metadata.wear.color}</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Quantity:</p>
        <QtySelect>
          <button
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </button>
          <input type="text" disabled value={quantity} />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Add to cart</Button>
      </div>
    </StyledProductDetail>
  )
}
