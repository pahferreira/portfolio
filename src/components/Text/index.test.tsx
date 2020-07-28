import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Text from './index'

describe('Text Component', () => {
  it('Render', () => {
    const textToTest = 'Render Text'
    const text = render(
      <ThemeProvider theme={theme}>
        <Text>{textToTest}</Text>
      </ThemeProvider>
    )
    expect(text).toBeTruthy()
    expect(text.getByText(textToTest)).toBeInstanceOf(HTMLParagraphElement)
    expect(text.getByText(textToTest).innerHTML).toEqual(textToTest)
  })
})
