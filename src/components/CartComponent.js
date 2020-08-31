import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/Components"
import priceFormat from "../utils/PriceFormat"
import { CartContext } from "../Context"

export default function CartComponent() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  console.log(cart)

  const getTotal = () => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + current.price.split("$")[1] * current.quantity,
        0
      )
    )
  }

  const priceFormated = (price, quantity) => {
    if (quantity) {
      return priceFormat(
        price.split("$")[1].split(".")[0] * quantity +
          price.split("$")[1].split(".")[1]
      )
    } else {
      return priceFormat(
        price.split("$")[1].split(".")[0] + price.split("$")[1].split(".")[1]
      )
    }
  }

  useEffect(() => {
    getTotal()
  }, [])
  return (
    <StyledCart>
      <h2>Shop Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map((swag) => (
            <tr key={swag.id}>
              <td>
                <img src={swag.metadata.img} alt={swag.name} /> {swag.name}
              </td>
              <td>USD:{priceFormated(swag.price)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormated(swag.price, swag.quantity)}</td>
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
