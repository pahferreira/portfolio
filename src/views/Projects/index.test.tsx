import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Projects from './index'
import { LanguageProvider } from 'hooks/useLanguage'
import { Provider } from 'react-redux'
import store from 'storage'

describe('Projects Screen', () => {
  it('Render Screen', () => {
    const homepage = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LanguageProvider>
            <Router>
              <Projects />
            </Router>
          </LanguageProvider>
        </ThemeProvider>
      </Provider>
    )
    expect(homepage).toBeTruthy()
  })
})
