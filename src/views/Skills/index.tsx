import React, { FC, useRef, useState, useEffect } from 'react'
import { Container, Content, SectionsContainer } from './styled'
import Header from 'components/Header'
import SectionTitle from 'components/SectionTitle'
import IdeaAndPlanning from './IdeaAndPlanning'
import Programming from './Programming'
import PersonalSkills from './PersonalSkills'
import { CSSTransition } from 'react-transition-group'

const Skills: FC = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false)

  useEffect(() => {
    setTriggerAnimation(true)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Content>
          <SectionTitle>Skills</SectionTitle>
          <CSSTransition
            in={triggerAnimation}
            classNames="fade"
            timeout={500}
            unmountOnExit>
            <SectionsContainer>
              <IdeaAndPlanning />
              <Programming />
              <PersonalSkills />
            </SectionsContainer>
          </CSSTransition>
        </Content>
      </Container>
    </>
  )
}

export default Skills
