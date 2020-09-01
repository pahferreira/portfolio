import React, { FC, useEffect, useState } from 'react'
import Text from 'components/Text'
import Title from 'components/Title'
import { Section, Image, AboutContent } from './styled'
import { CSSTransition } from 'react-transition-group'

type Props = {
  greeting: string
  description: string
  title: string
  image: string
}

const Desktop: FC<Props> = (props: Props) => {
  const { greeting, description, title, image } = props
  const [triggerAnimation, setTriggerAnimation] = useState(false)
  const [triggerSecondAnimation, setTriggerSecondAnimation] = useState(false)

  useEffect(() => {
    setTriggerAnimation(true)
  }, [])

  console.log(image)
  return (
    <Section>
      <CSSTransition
        in={triggerSecondAnimation}
        classNames="appear-box"
        timeout={1000}
        unmountOnExit>
        <AboutContent>
          <Text>{greeting}</Text>
          <Title>{title},</Title>
          <Text align="left">{description}</Text>
        </AboutContent>
      </CSSTransition>
      <CSSTransition
        in={triggerAnimation}
        classNames="appear"
        timeout={500}
        unmountOnExit
        onEntered={() => setTriggerSecondAnimation(true)}>
        <Image image={image} />
      </CSSTransition>
    </Section>
  )
}

export default Desktop
