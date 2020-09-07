import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import NotFound from './index'
import { Container } from './styled'
import { LanguageProvider } from 'hooks/useLanguage'
import { Provider } from 'react-redux'
import store from 'storage'

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LanguageProvider>
            <Router>
              <NotFound />
            </Router>
          </LanguageProvider>
        </ThemeProvider>
      </Provider>
    )
    expect(homepage).toBeTruthy()
  })
})
