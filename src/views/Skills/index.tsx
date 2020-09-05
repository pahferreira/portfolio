import React, { FC, useState, useEffect } from 'react'
import { SectionsContainer } from './styled'
import Container from 'components/Container'
import Content from 'components/Content'
import SectionTitle from 'components/SectionTitle'
import FadeAnimation from 'components/FadeAnimation'
import { useDispatch, useSelector } from 'react-redux'
import { TStore } from 'types/storage'
import { TState as TSkillsState } from 'types/skills'
import { trigger } from 'storage/ducks/skills'
import Section from './Section'

const Skills: FC = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false)
  const dispatch = useDispatch()
  const skills = useSelector<TStore, TSkillsState>((state) => state.skills)

  useEffect(() => {
    dispatch(trigger())
  }, [dispatch])

  useEffect(() => {
    if (skills.sections.length > 0) {
      setTriggerAnimation(true)
    }
  }, [skills.sections])

  return (
    <>
      <Container>
        <Content>
          <SectionTitle>{skills.section_title}</SectionTitle>
          <FadeAnimation activateAnimation={triggerAnimation}>
            <SectionsContainer>
              {skills.sections.map((section, index) => (
                <Section section={section} key={index} />
              ))}
            </SectionsContainer>
          </FadeAnimation>
        </Content>
      </Container>
    </>
  )
}

export default Skills
