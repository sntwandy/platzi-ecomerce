export default function priceFormat(num) {
  const price = Number(num)
  const priceFloat = (price / 100).toFixed(2)
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceFloat)
}
