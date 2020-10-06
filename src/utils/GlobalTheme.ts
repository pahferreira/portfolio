import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

const StyledApp = createGlobalStyle<{ theme: Theme }>`
body {
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
}
  #root {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 1600px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  *{
    box-sizing: border-box;
  }
`
export default StyledApp
