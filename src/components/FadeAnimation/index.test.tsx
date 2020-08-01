import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import FadeAnimation from '.'
import theme from 'utils/theme'

describe('Fade Animation', () => {
  it('Render Component', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <FadeAnimation activateAnimation={true}>
          <div />
        </FadeAnimation>
      </ThemeProvider>
    )
    expect(container).toBeTruthy()
  })
})
