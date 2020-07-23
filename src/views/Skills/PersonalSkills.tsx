import React, { FC } from 'react'
import { Section } from './styled'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import Note from 'components/Note'

const TOOLS = ['Slack', 'Zoom', 'Google Meets', 'Spotify']

const Programming: FC = () => {
  return (
    <Section>
      <Title>Personal Skills</Title>
      <Text>
        My friends says I'm can jump easily between fun and work, making any
        activity painless and enjoyable.
      </Text>
      <Subtitle>Qualities</Subtitle>
      <Text>
        Patient, creative, teamwork, funny, motivated and communicative
      </Text>
      <Subtitle>Tools</Subtitle>
      {TOOLS.map((tool, index) => (
        <Text key={index}>{tool}</Text>
      ))}
      <Note>(A good song to hype!)</Note>
    </Section>
  )
}

export default Programming
