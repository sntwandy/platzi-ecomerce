import { css, createGlobalStyle } from "styled-components"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
  .___gatsby{
    position: absolute;
    padding: 0;
    margin: 0;
  }
`
