import { createGlobalStyle } from 'styled-components'
import theme, { Theme } from './theme'

const StyledApp = createGlobalStyle<{ theme: Theme }>`
body {
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  #root {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
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
