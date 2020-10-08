import React, { FC, useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { ProjectWrapper } from './styled'

type Props = {
  children: JSX.Element | Array<JSX.Element>
  first?: boolean
}

const TransitionWrapper: FC<Props> = ({ children, first }: Props) => {
  const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false)

  const handleEntering = (isVisible: boolean) => {
    if (isVisible && !first) {
      setTriggerAnimation(isVisible)
    }
  }

  useEffect(() => {
    if (first) {
      setTriggerAnimation(true)
    }
  }, [first])

  return (
    <VisibilitySensor onChange={handleEntering}>
      <ProjectWrapper entered={triggerAnimation}>{children}</ProjectWrapper>
    </VisibilitySensor>
  )
}

export default TransitionWrapper
