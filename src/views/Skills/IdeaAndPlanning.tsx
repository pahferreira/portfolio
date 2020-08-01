import React, { FC } from 'react'
import { Section } from './styled'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import Note from 'components/Note'

const TOOLS = ['Project Management Tools', 'Figma', 'Adobe XD', 'Pen & Papper']

const IdeaAndPlanning: FC = () => {
  return (
    <Section>
      <Title textTransform="uppercase">Idea &amp; Planning</Title>
      <Text>
        I value conceiving the idea and make part of the plan creation to
        achieve it in the most effective way.
      </Text>
      <Subtitle>Principles</Subtitle>
      <Text>
        UI/UX, Responsive Design, User friendly, Agile Development, SCRUM.
      </Text>
      <Subtitle>Tools</Subtitle>
      {TOOLS.map((tool, index) => (
        <Text key={index}>{tool}</Text>
      ))}
      <Note>(Always with it for insights)</Note>
    </Section>
  )
}

export default IdeaAndPlanning
