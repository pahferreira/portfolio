import React, { FC, useState, useEffect } from 'react'
import { TImage } from 'types/projects'
import {
  Container,
  Content,
  ImageElement,
  VideoElement,
  Header,
  NavigatorWrapper,
} from './styled'
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai'

type Props = {
  visible: boolean
  gallery: Array<TImage>
  activeIndex: number
  setVisible: (status: boolean) => void
}

enum ENavigationActions {
  BACK = 'back',
  NEXT = 'next',
}

const Gallery: FC<Props> = (props: Props) => {
  const { visible, gallery, activeIndex, setVisible } = props
  const [currentElement, setCurrentElement] = useState<TImage | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(activeIndex)
  }, [activeIndex])

  useEffect(() => {
    setCurrentElement(gallery[0])
  }, [gallery])

  useEffect(() => {
    setCurrentElement(gallery[activeIndex])
  }, [activeIndex, gallery])

  useEffect(() => {
    setCurrentElement(gallery[index])
  }, [index, gallery])

  const _renderElement = () => {
    if (currentElement?.provider_metadata?.resource_type === 'video') {
      return (
        <VideoElement controls>
          <source src={currentElement?.url} type="video/mp4" />
        </VideoElement>
      )
    }
    return <ImageElement src={currentElement?.url} />
  }

  const handleClose = () => {
    setVisible(false)
  }

  const handleNavigation = (action: ENavigationActions) => {
    if (action === ENavigationActions.BACK) {
      if (index === 0) {
        setIndex(gallery.length - 1)
      } else {
        setIndex(index - 1)
      }
    } else {
      setIndex((index + 1) % gallery.length)
    }
  }

  return (
    <Container visible={visible}>
      <Header>
        <AiOutlineClose
          size={35}
          color="#E4E4A8"
          style={{ cursor: 'pointer' }}
          onClick={handleClose}
        />
      </Header>
      <Content>
        <NavigatorWrapper position="left">
          <AiOutlineLeft
            size={40}
            color="#E4E4A8"
            style={{ cursor: 'pointer' }}
            onClick={() => handleNavigation(ENavigationActions.BACK)}
          />
        </NavigatorWrapper>
        {_renderElement()}
        <NavigatorWrapper position="right">
          <AiOutlineRight
            size={40}
            color="#E4E4A8"
            style={{ cursor: 'pointer' }}
            onClick={() => handleNavigation(ENavigationActions.NEXT)}
          />
        </NavigatorWrapper>
      </Content>
    </Container>
  )
}

export default Gallery
