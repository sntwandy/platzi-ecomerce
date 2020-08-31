const React = require("react")
const Layout = require("./src/components/Layout").default
const { GlobalStyles } = require("./src/styles")
const { CartProvider } = require("./src/Context")

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
