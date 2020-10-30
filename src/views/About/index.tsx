import React, { FC, useEffect } from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import SectionTitle from 'components/SectionTitle'
import { useMediaQuery } from '@material-ui/core'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { useDispatch, useSelector } from 'react-redux'
import { TState as TAboutState } from 'types/about'
import { TStore } from 'types/storage'
import { trigger } from 'storage/ducks/about'
import { useLanguage } from 'hooks/useLanguage'

const About: FC = () => {
  const matches = useMediaQuery('(max-width: 960px)')
  const dispatch = useDispatch()
  const about = useSelector<TStore, TAboutState>((state) => state.about)
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    dispatch(trigger(currentLanguage))
  }, [dispatch, currentLanguage])

  return (
    <Container>
      <Content>
        <SectionTitle>{about.section_title}</SectionTitle>
        {matches ? (
          <Mobile
            greeting={about.greeting}
            title={about.title}
            description={about.description}
            image={about.mobile_picture.url}
          />
        ) : (
          <Desktop
            greeting={about.greeting}
            title={about.title}
            description={about.description}
            image={about.picture.url}
          />
        )}
      </Content>
    </Container>
  )
}

export default About
