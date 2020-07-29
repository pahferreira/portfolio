import React, { FC } from 'react'
import Header from 'components/Header'
import Container from 'components/Container'
import Content from 'components/Content'
import SectionTitle from 'components/SectionTitle'
import Text from 'components/Text'
import Title from 'components/Title'
import { Section, Image, AboutContent } from './styled'

const About: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <SectionTitle>About Me</SectionTitle>
          <Section>
            <AboutContent>
              <Text>Hello, I'm</Text>
              <Title>Pah Ferreira,</Title>
              <Text align="left">
                My name is Paulo Henrique, but everyone calls me Pah. Why Pah?
                It's a nice history that we can share later. I'm a 27 years old
                developer, who loves Javascript, with almost two years of
                experience. Although the short experience, I was able to face
                many great challenges and overcome then all, growing with each
                one. But enough with the techy talky, let's gossip a little bit
                about me. I'm kinda a mix of calm and happiness, most of the
                time with good vibes and good thoughts, trying to live the
                bright side of life, and always with some friends around to chat
                and spend some quality time. I also love music! Yeah, love it so
                much that I had a band for a few years. Yeah, I'm that guy with
                a song reference for anything. Always communicative, I like to
                leave things clear and avoid misunderstandings in each part of
                life. It's nice to plan and it's even nicer to do it. So, that's
                it! Thanks for your time and I hope we can catch up and spend
                some time having fun, talking about anything, and enjoying some
                good music. Cya!
              </Text>
            </AboutContent>
            <Image />
          </Section>
        </Content>
      </Container>
    </>
  )
}

export default About
