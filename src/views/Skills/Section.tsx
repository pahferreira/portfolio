import React, { FC } from 'react'
import { Container, Block } from './styled'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import Note from 'components/Note'
import { TSection, TTool } from 'types/skills'

type Props = {
  section: TSection
}

const IdeaAndPlanning: FC<Props> = (props: Props) => {
  const { section } = props

  return (
    <Container>
      <Title textTransform="uppercase">{section.title}</Title>
      <Block>
        <Text>{section.description}</Text>
      </Block>
      <Subtitle>{section.part.title}</Subtitle>
      <Block>
        <Text>{section.part.description}</Text>
      </Block>
      <Subtitle>{section.tools_title}</Subtitle>
      {section.tools.map((tool: TTool, index: number) => (
        <>
          <Text key={index}>{tool.value}</Text>
          {tool.note && <Note>({tool?.note})</Note>}
        </>
      ))}
    </Container>
  )
}

export default IdeaAndPlanning
