import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from 'utils/theme'
import Navbar from './index'

describe('Navbar Tests', () => {
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
      {
        url: '/portfolio/contact',
        label: 'Contact',
      },
    ]
    const navbar = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
        </Router>
      </ThemeProvider>
    )
    expect(navbar).toBeTruthy()
    routes.forEach((route) => {
      expect(navbar.getByText(route.label)).toBeInstanceOf(HTMLAnchorElement)
      expect(navbar.getByText(route.label).getAttribute('href')).toEqual(
        route.url
      )
    })
  })
})
