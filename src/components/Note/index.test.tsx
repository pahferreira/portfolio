import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Note from './index'

describe('Note Component', () => {
  it('Render', () => {
    const textToTest = 'Render Note'
    const note = render(
      <ThemeProvider theme={theme}>
        <Note>{textToTest}</Note>
      </ThemeProvider>
    )
    expect(note).toBeTruthy()
    expect(note.getByText(textToTest)).toBeInstanceOf(HTMLParagraphElement)
    expect(note.getByText(textToTest).innerHTML).toEqual(textToTest)
  })
})
