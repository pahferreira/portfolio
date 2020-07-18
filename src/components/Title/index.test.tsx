import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Title from './index'

describe('Title Component', () => {
  it('Render', () => {
    const titleToTest = 'Render Title'
    const title = render(
      <ThemeProvider theme={theme}>
        <Title>{titleToTest}</Title>
      </ThemeProvider>
    )
    expect(title).toBeTruthy()
    expect(title.getByText(titleToTest)).toBeInstanceOf(HTMLParagraphElement)
    expect(title.getByText(titleToTest).innerHTML).toEqual(titleToTest)
  })
})
