import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Skills from './index'
import { SectionsContainer, Container } from './styled'
import Section from './Section'
import { Provider } from 'react-redux'
import store from 'storage'

describe('Skills Screen', () => {
  it('Component SectionsContainer Render', () => {
    const content = render(
      <ThemeProvider theme={theme}>
        <SectionsContainer />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component Container Render', () => {
    const content = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Render Personal Skills Section', () => {
    const testSection = {
      title: 'Test',
      description: 'Test Description',
      part: {
        title: 'Part Test',
        description: 'Part Description Test',
      },
      tools_title: 'Test Tools Title',
      tools: [],
    }
    const content = render(
      <ThemeProvider theme={theme}>
        <Section section={testSection} />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content.container).toBeInstanceOf(HTMLDivElement)
    expect(content.container.hasChildNodes).toBeTruthy()
  })

  it('Render Screen', () => {
    const homepage = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Skills />
          </Router>
        </ThemeProvider>
      </Provider>
    )
    expect(homepage).toBeTruthy()
  })
})
