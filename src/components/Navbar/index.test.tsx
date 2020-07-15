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
        url: '/',
        label: 'Home',
      },
      {
        url: '/about',
        label: 'About',
      },
      {
        url: '/projects',
        label: 'Projects',
      },
      {
        url: '/skills',
        label: 'Skills',
      },
      {
        url: '/contact',
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
