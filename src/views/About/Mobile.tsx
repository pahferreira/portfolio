import React, { FC, useState, useEffect } from 'react'
import Text from 'components/Text'
import Title from 'components/Title'
import FadeAnimation from 'components/FadeAnimation'
import {
  MobileSection,
  MobileImage,
  MobileHeader,
  MobileAbountContent,
  MobileLabelContainer,
} from './styled'

type Props = {
  greeting: string
  description: string
  title: string
  image: string
}

const Desktop: FC<Props> = (props: Props) => {
  const { greeting, description, title, image } = props
  const [triggerAnimation, setTriggerAnimation] = useState(false)

  useEffect(() => {
    setTriggerAnimation(true)
  }, [])

  return (
    <FadeAnimation activateAnimation={triggerAnimation}>
      <MobileSection>
        <MobileHeader>
          <MobileImage image={image} />
          <MobileLabelContainer>
            <Text>{greeting}</Text>
            <Title>{title},</Title>
          </MobileLabelContainer>
        </MobileHeader>
        <MobileAbountContent>
          <Text>{description}</Text>
        </MobileAbountContent>
      </MobileSection>
    </FadeAnimation>
  )
}

export default Desktop
