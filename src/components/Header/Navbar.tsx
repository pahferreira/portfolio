import React, { FC } from 'react'
import { Container, NavLink } from './styled'

type Option = {
  url: string
  label: string
}

type Props = {
  options: Array<Option>
}

const Navbar: FC<Props> = (props: Props) => {
  const { options } = props
  return (
    <Container container direction="row" justify="flex-end">
      {options.map((option: Option) => (
        <NavLink
          key={option.label}
          to={option.url}
          active={
            window.location.pathname.includes(option.url) ? 'true' : 'false'
          }>
          {option.label}
        </NavLink>
      ))}
    </Container>
  )
}

export default Navbar
