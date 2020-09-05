import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Home from './index'
import { Container, Cursor } from './styled'
import { Provider } from 'react-redux'
import store from 'storage'

describe('Homepage Screen', () => {
  it('Component Container Render', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    )
    expect(container).toBeTruthy()
  })

  it('Component Cursor Render', () => {
    const cursor = render(
      <ThemeProvider theme={theme}>
        <Cursor />
      </ThemeProvider>
    )
    expect(cursor).toBeTruthy()
    expect(cursor.container.firstChild).toBeInstanceOf(HTMLSpanElement)
  })

  it('Render Screen', () => {
    const homepage = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Home />
          </Router>
        </ThemeProvider>
      </Provider>
    )
    expect(homepage).toBeTruthy()
  })
})
