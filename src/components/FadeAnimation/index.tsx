import React from 'react'
import { CSSTransition } from 'react-transition-group'

type Props = {
  children: JSX.Element | Array<JSX.Element>
  activateAnimation: boolean
}

const FadeAnimation = ({ children, activateAnimation }: Props) => (
  <CSSTransition
    in={activateAnimation}
    classNames="fade"
    timeout={500}
    unmountOnExit>
    {children}
  </CSSTransition>
)

export default FadeAnimation
