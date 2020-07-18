import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import NotFound from './index'
import { Container } from './styled'

describe('NotFound Screen', () => {
  it('Component Container Render', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    )
    expect(container).toBeTruthy()
  })

  it('Render Screen', () => {
    const homepage = render(
      <ThemeProvider theme={theme}>
        <Router>
          <NotFound />
        </Router>
      </ThemeProvider>
    )
    expect(homepage).toBeTruthy()
  })
})
