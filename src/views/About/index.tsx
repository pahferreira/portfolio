import React, { FC } from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import SectionTitle from 'components/SectionTitle'
import { useMediaQuery } from '@material-ui/core'
import Desktop from './Desktop'
import Mobile from './Mobile'

const About: FC = () => {
  const matches = useMediaQuery('(max-width: 960px)')
  return (
    <>
      <Container>
        <Content>
          <SectionTitle>About Me</SectionTitle>
          {matches ? <Mobile /> : <Desktop />}
        </Content>
      </Container>
    </>
  )
}

export default About
