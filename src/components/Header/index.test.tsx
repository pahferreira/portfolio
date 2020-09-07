import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from 'utils/theme'
import Header from './index'
import { Provider } from 'react-redux'
import store from 'storage'
import { LanguageProvider } from 'hooks/useLanguage'

describe('Header Tests', () => {
  it('Render', () => {
    const header = render(
      <Provider store={store}>
        <LanguageProvider>
          <ThemeProvider theme={theme}>
            <Router>
              <Header />
            </Router>
          </ThemeProvider>
        </LanguageProvider>
      </Provider>
    )
    expect(header).toBeTruthy()
  })
})
