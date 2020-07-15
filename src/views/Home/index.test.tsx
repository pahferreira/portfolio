import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Home from './index'
import { Container, Subtitle, Title, Cursor } from './styled'

describe('Homepage Test', () => {
  it('Container Render', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    )
    expect(container).toBeTruthy()
  })

  it('Title Render', () => {
    const titleToTest = 'Render Title'
    const title = render(
      <ThemeProvider theme={theme}>
        <Title>{titleToTest}</Title>
      </ThemeProvider>
    )
    expect(title).toBeTruthy()
    expect(title.getByText(titleToTest)).toBeInstanceOf(HTMLParagraphElement)
    expect(title.getByText(titleToTest).innerHTML).toEqual(titleToTest)
  })

  it('Subtitle Render', () => {
    const titleToTest = 'Render Subtitle'
    const title = render(
      <ThemeProvider theme={theme}>
        <Subtitle>{titleToTest}</Subtitle>
      </ThemeProvider>
    )
    expect(title).toBeTruthy()
    expect(title.getByText(titleToTest)).toBeInstanceOf(HTMLParagraphElement)
    expect(title.getByText(titleToTest).innerHTML).toEqual(titleToTest)
  })

  it('Cursor Render', () => {
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
      <ThemeProvider theme={theme}>
        <Router>
          <Home />
        </Router>
      </ThemeProvider>
    )
    expect(homepage).toBeTruthy()
  })
})
