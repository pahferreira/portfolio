import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from 'utils/theme'
import Header from './index'

describe('Header Tests', () => {
  it('Render', () => {
    const routes = [
      {
        url: '/portfolio',
        label: 'Home',
      },
      {
        url: '/portfolio/about',
        label: 'About',
      },
      {
        url: '/portfolio/projects',
        label: 'Projects',
      },
      {
        url: '/portfolio/skills',
        label: 'Skills',
      },
    ]
    const header = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    )
    expect(header).toBeTruthy()
    routes.forEach((route) => {
      expect(header.getByText(route.label)).toBeInstanceOf(HTMLAnchorElement)
      expect(header.getByText(route.label).getAttribute('href')).toEqual(
        route.url
      )
    })
  })
})
