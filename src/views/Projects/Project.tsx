import React, { FC } from 'react'
import {
  ProjectContainer,
  ProjectContent,
  ProjectImage,
  Row,
  Label,
  Link,
  GalleryContainer,
  GalleryImage,
  Separator,
} from './styled'
import { TProject, TImage } from 'types/projects'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import { useSelector } from 'react-redux'
import { TState as TProjectsState } from 'types/projects'
import { TStore } from 'types/storage'
import TransitionWrapper from './TransitionWrapper'

type Props = {
  project: TProject
  index: number
}

const Projects: FC<Props> = (props: Props) => {
  const { project, index } = props
  const { tech_label, repo_label, live, gallery } = useSelector<
    TStore,
    TProjectsState
  >((state) => state.projects)

  return (
    <TransitionWrapper first={index === 0}>
      <ProjectContainer>
        <ProjectContent>
          <Title margin="0 0 10px">{project.title}</Title>
          <Text align="left">{project.description}</Text>
          <Row>
            <Text align="left">
              <Label>{tech_label}:</Label>
              {project.technologies}
            </Text>
          </Row>
          {project?.repository_link && (
            <Row>
              <Text align="left">
                <Label>{repo_label}:</Label>
                <Link href={project?.repository_link} target="blank">
                  {project?.repository_link}
                </Link>
              </Text>
            </Row>
          )}
          {project?.live_link && (
            <Row>
              <Text align="left">
                <Label>{live}:</Label>
                <Link href={project?.live_link} target="blank">
                  {project?.live_link}
                </Link>
              </Text>
            </Row>
          )}
          {project?.gallery && project?.gallery.length > 0 && (
            <>
              <Subtitle>{gallery}:</Subtitle>
              <GalleryContainer>
                {project?.gallery?.map((image: TImage) => (
                  <GalleryImage key={image.url} source={image.url} />
                ))}
              </GalleryContainer>
            </>
          )}
        </ProjectContent>
        <ProjectImage source={project.cover_image.url} />
      </ProjectContainer>
      <Separator />
    </TransitionWrapper>
  )
}

export default Projects
