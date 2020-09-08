import React, { useEffect, FC } from 'react'
import { ProjectsContainer, Content, Container } from './styled'
import SectionTitle from 'components/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { TState as TProjectsState, TProject } from 'types/projects'
import { TStore } from 'types/storage'
import { trigger } from 'storage/ducks/projects'
import { useLanguage } from 'hooks/useLanguage'
import Project from './Project'

const Projects: FC = () => {
  const { currentLanguage } = useLanguage()
  const dispatch = useDispatch()
  const { section_title, projects } = useSelector<TStore, TProjectsState>(
    (state) => state.projects
  )

  useEffect(() => {
    dispatch(trigger(currentLanguage))
  }, [dispatch, currentLanguage])

  return (
    <Container>
      <Content>
        <SectionTitle>{section_title}</SectionTitle>
        <ProjectsContainer>
          {projects.map((project: TProject) => (
            <Project project={project} key={project.id} />
          ))}
        </ProjectsContainer>
      </Content>
    </Container>
  )
}

export default Projects
