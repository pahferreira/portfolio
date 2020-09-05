import React from 'react'
import { render } from '@testing-library/react'
import {
  Section,
  AboutContent,
  Image,
  MobileAbountContent,
  MobileHeader,
  MobileImage,
  MobileLabelContainer,
  MobileSection,
} from './styled'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Desktop from './Desktop'
import Mobile from './Mobile'
import theme from 'utils/theme'

describe('About Me Screen', () => {
  it('Component Section Render', () => {
    const section = render(
      <ThemeProvider theme={theme}>
        <Section />
      </ThemeProvider>
    )
    expect(section).toBeTruthy()
    expect(section.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component AboutContent Render', () => {
    const aboutContent = render(
      <ThemeProvider theme={theme}>
        <AboutContent />
      </ThemeProvider>
    )
    expect(aboutContent).toBeTruthy()
    expect(aboutContent.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component Image Render', () => {
    const image = render(
      <ThemeProvider theme={theme}>
        <Image image="" />
      </ThemeProvider>
    )
    expect(image).toBeTruthy()
    expect(image.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component MobileAbountContent Render', () => {
    const mobileAbountContent = render(
      <ThemeProvider theme={theme}>
        <MobileAbountContent />
      </ThemeProvider>
    )
    expect(mobileAbountContent).toBeTruthy()
    expect(mobileAbountContent.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component MobileHeader Render', () => {
    const mobileHeader = render(
      <ThemeProvider theme={theme}>
        <MobileHeader />
      </ThemeProvider>
    )
    expect(mobileHeader).toBeTruthy()
    expect(mobileHeader.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component MobileImage Render', () => {
    const mobileImage = render(
      <ThemeProvider theme={theme}>
        <MobileImage image="" />
      </ThemeProvider>
    )
    expect(mobileImage).toBeTruthy()
    expect(mobileImage.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component MobileLabelContainer Render', () => {
    const mobileLabelContainer = render(
      <ThemeProvider theme={theme}>
        <MobileLabelContainer />
      </ThemeProvider>
    )
    expect(mobileLabelContainer).toBeTruthy()
    expect(mobileLabelContainer.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Component MobileSection Render', () => {
    const mobileSection = render(
      <ThemeProvider theme={theme}>
        <MobileSection />
      </ThemeProvider>
    )
    expect(mobileSection).toBeTruthy()
    expect(mobileSection.container).toBeInstanceOf(HTMLDivElement)
  })

  it('Mobile Screen', () => {
    const mobileScreen = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Mobile greeting="Test" description="Test" title="Test" image="" />
        </Router>
      </ThemeProvider>
    )
    expect(mobileScreen).toBeTruthy()
  })

  it('Desktop Screen', () => {
    const desktopScreen = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Desktop greeting="Test" description="Test" title="Test" image="" />
        </Router>
      </ThemeProvider>
    )
    expect(desktopScreen).toBeTruthy()
  })
})
