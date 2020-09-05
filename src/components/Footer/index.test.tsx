import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from 'utils/theme'
import Footer from './index'
import { Provider } from 'react-redux'
import store from 'storage'

describe('Footer Tests', () => {
  it('Render', () => {
    const footer = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Footer />
          </Router>
        </ThemeProvider>
      </Provider>
    )
    expect(footer).toBeTruthy()
  })
})
