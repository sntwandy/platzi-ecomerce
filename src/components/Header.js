import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MenuItem, StyledHeader } from "../styles/Components"
import { CartContext } from "../Context"

const Header = ({ siteTitle }) => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Products</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://twitter.com/@sntwandy" target="_blank">
              @sntwandy
            </a>
          </MenuItem>
          <MenuItem>
            <Link to="/Cart/">
              <span>
                <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cart" />
              </span>
              {cart.length}
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
