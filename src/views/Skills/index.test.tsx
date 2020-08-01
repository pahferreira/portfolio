import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Skills from './index'
import { SectionsContainer, Section } from './styled'
import IdeaAndPlanning from './IdeaAndPlanning'
import Programming from './Programming'
import PersonalSkils from './PersonalSkills'

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

  it('Component Section Render', () => {
    const content = render(
      <ThemeProvider theme={theme}>
        <Section />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Render Idea & Planning Section', () => {
    const content = render(
      <ThemeProvider theme={theme}>
        <IdeaAndPlanning />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content.container).toBeInstanceOf(HTMLDivElement)
    expect(content.container.hasChildNodes).toBeTruthy()
    expect(content.getByText('Idea & Planning')).toBeTruthy()
    expect(content.getByText('Principles')).toBeTruthy()
    expect(content.getByText('Tools')).toBeTruthy()
  })

  it('Render Programming Section', () => {
    const content = render(
      <ThemeProvider theme={theme}>
        <Programming />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content.container).toBeInstanceOf(HTMLDivElement)
    expect(content.container.hasChildNodes).toBeTruthy()
    expect(content.getByText('Programming')).toBeTruthy()
    expect(content.getByText('Languages')).toBeTruthy()
    expect(content.getByText('Tools')).toBeTruthy()
  })

  it('Render Personal Skills Section', () => {
    const content = render(
      <ThemeProvider theme={theme}>
        <PersonalSkils />
      </ThemeProvider>
    )
    expect(content).toBeTruthy()
    expect(content.container).toBeInstanceOf(HTMLDivElement)
    expect(content.container.hasChildNodes).toBeTruthy()
    expect(content.getByText('Personal Skills')).toBeTruthy()
    expect(content.getByText('Qualities')).toBeTruthy()
    expect(content.getByText('Tools')).toBeTruthy()
  })

  it('Render Screen', () => {
    const homepage = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Skills />
        </Router>
      </ThemeProvider>
    )
    expect(homepage).toBeTruthy()
  })
})
