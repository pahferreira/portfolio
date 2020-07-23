import React, { FC } from 'react'
import { Container, Content, SectionsContainer } from './styled'
import Header from 'components/Header'
import SectionTitle from 'components/SectionTitle'
import IdeaAndPlanning from './IdeaAndPlanning'
import Programming from './Programming'
import PersonalSkills from './PersonalSkills'

const Skills: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <SectionTitle>Skills</SectionTitle>
          <SectionsContainer>
            <IdeaAndPlanning />
            <Programming />
            <PersonalSkills />
          </SectionsContainer>
        </Content>
      </Container>
    </>
  )
}

export default Skills
