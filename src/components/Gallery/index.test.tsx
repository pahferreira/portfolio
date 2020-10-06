import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from 'utils/theme'
import Gallery from './index'
import { Provider } from 'react-redux'
import store from 'storage'

describe('Gallery Tests', () => {
  const testFunction = (status: boolean) => {}
  it('Render', () => {
    const footer = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Gallery
              visible={true}
              gallery={[]}
              activeIndex={0}
              setVisible={testFunction}
            />
          </Router>
        </ThemeProvider>
      </Provider>
    )
    expect(footer).toBeTruthy()
  })
})
