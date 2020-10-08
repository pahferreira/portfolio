import React, { useEffect, FC, useState } from 'react'
import { ProjectsContainer, Content, Container } from './styled'
import SectionTitle from 'components/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { TState as TProjectsState, TProject, TImage } from 'types/projects'
import { TStore } from 'types/storage'
import { trigger } from 'storage/ducks/projects'
import { useLanguage } from 'hooks/useLanguage'
import Project from './Project'
import Gallery from 'components/Gallery'
import { useMediaQuery } from '@material-ui/core'

const Projects: FC = () => {
  const matches = useMediaQuery('(max-width: 900px)')
  const { currentLanguage } = useLanguage()
  const dispatch = useDispatch()
  const [showGallery, setShowGallery] = useState(false)
  const [currentGallery, setCurrentGallery] = useState<Array<TImage>>([])
  const [galleryIndex, setGalleryIndex] = useState<number>(0)
  const { section_title, projects } = useSelector<TStore, TProjectsState>(
    (state) => state.projects
  )

  useEffect(() => {
    dispatch(trigger(currentLanguage))
  }, [dispatch, currentLanguage])

  const handleGallery = (
    gallery: Array<TImage> | undefined,
    currentIndex: number = 0
  ) => {
    if (gallery) {
      setCurrentGallery(gallery)
      setGalleryIndex(currentIndex)
      setShowGallery(true)
    }
  }

  return (
    <Container>
      <Gallery
        visible={showGallery}
        gallery={currentGallery}
        activeIndex={galleryIndex}
        setVisible={setShowGallery}
      />
      <Content>
        <SectionTitle>{section_title}</SectionTitle>
        <ProjectsContainer>
          {projects.map((project: TProject, index: number) => (
            <Project
              project={project}
              key={project.id}
              first={index === 0 || matches}
              onClickGallery={handleGallery}
            />
          ))}
        </ProjectsContainer>
      </Content>
    </Container>
  )
}

export default Projects
