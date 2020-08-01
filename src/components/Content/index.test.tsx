import React from 'react'
import { render } from '@testing-library/react'
import Content from './index'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'

describe('Content Component', () => {
  it('Render', () => {
    const content = render(
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content).toBeInstanceOf(HTMLDivElement)
  })
})
