import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import SectionTitle from './index'

describe('SectionTitle Component', () => {
  it('Render', () => {
    const titleToTest = 'Render SectionTitle'
    const title = render(
      <ThemeProvider theme={theme}>
        <SectionTitle>{titleToTest}</SectionTitle>
      </ThemeProvider>
    )
    expect(title).toBeTruthy()
    expect(title.getByText(titleToTest)).toBeInstanceOf(HTMLParagraphElement)
    expect(title.getByText(titleToTest).innerHTML).toEqual(titleToTest)
  })
})
