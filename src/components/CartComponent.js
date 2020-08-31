import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/Components"
import priceFormat from "../utils/PriceFormat"
import { CartContext } from "../Context"

export default function CartComponent() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
    )
  }

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PK))
    getTotal()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await stripe.redirectToCheckout({
      lineItems: cart.map(({ id, quantity }) => ({ price: id, quantity })),
      mode: "subscription",
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: CANCEL_REDIRECT,
    })

    if (error) {
      throw new Error(error.message)
    }
  }

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
              <td>USD:{priceFormat(swag.price)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.quantity * swag.price)}</td>
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
          <Button onClick={handleSubmit} disabled={cart.length === 0}>
            Buy
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}
