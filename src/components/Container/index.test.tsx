import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Container from './index'

describe('Container Component', () => {
  it('Render', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    )
    expect(container).toBeTruthy()
    expect(container).toBeInstanceOf(HTMLDivElement)
  })
})
