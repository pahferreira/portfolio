import React, { FC, useState, useEffect } from 'react'
import { SectionsContainer } from './styled'
import Container from 'components/Container'
import Content from 'components/Content'
import SectionTitle from 'components/SectionTitle'
import IdeaAndPlanning from './IdeaAndPlanning'
import Programming from './Programming'
import PersonalSkills from './PersonalSkills'
import FadeAnimation from 'components/FadeAnimation'

const Skills: FC = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false)

  useEffect(() => {
    setTriggerAnimation(true)
  }, [])

  return (
    <>
      <Container>
        <Content>
          <SectionTitle>Skills</SectionTitle>
          <FadeAnimation activateAnimation={triggerAnimation}>
            <SectionsContainer>
              <IdeaAndPlanning />
              <Programming />
              <PersonalSkills />
            </SectionsContainer>
          </FadeAnimation>
        </Content>
      </Container>
    </>
  )
}

export default Skills
