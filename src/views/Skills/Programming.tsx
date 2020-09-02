import React, { FC } from 'react'
import { Container } from './styled'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'

const TOOLS = [
  'VS Code',
  'Material UI',
  'Ant Design',
  'Github',
  'Github Actions',
]

const Programming: FC = () => {
  return (
    <Container>
      <Title textTransform="uppercase">Programming</Title>
      <Text>
        I really like to code things that make people's life easier and happier.
        Give life to anyone's idea.
      </Text>
      <Subtitle>Languages</Subtitle>
      <Text>
        JavaScript, TypeScript, React, React Native, HTML &amp; CSS, NodeJS,
        ExpressJS, Strapi, MongoDB.
      </Text>
      <Subtitle>Tools</Subtitle>
      {TOOLS.map((tool, index) => (
        <Text key={index}>{tool}</Text>
      ))}
    </Container>
  )
}

export default Programming
