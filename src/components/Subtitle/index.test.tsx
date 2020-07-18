import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Subtitle from './index'

describe('Subtitle Component', () => {
  it('Render', () => {
    const titleToTest = 'Render Subtitle'
    const title = render(
      <ThemeProvider theme={theme}>
        <Subtitle>{titleToTest}</Subtitle>
      </ThemeProvider>
    )
    expect(title).toBeTruthy()
    expect(title.getByText(titleToTest)).toBeInstanceOf(HTMLParagraphElement)
    expect(title.getByText(titleToTest).innerHTML).toEqual(titleToTest)
  })
})
