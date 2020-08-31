import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/Components"
import priceFormat from "../utils/PriceFormat"
import { CartContext } from "../Context"

export default function CartComponent() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
    )
  }

  useEffect(() => {
    setTotal()
  }, [])
  return (
    <StyledCart>
      <h2>Shop Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>console.log(Number(swag.price)
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map((swag) => (
            <tr key={swag.id}>
              <td>
                <img src={swag.metadata.img} alt={swag.name} /> {swag.name}
              </td>
              <td>USD: {priceFormat(swag.price)}</td>
              <td>{swag.quantity}</td>
              <td>{swag.quantity * priceFormat(swag.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal</h3>
          <small>USD: {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button>Buy</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
