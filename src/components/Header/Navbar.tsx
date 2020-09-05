import React, { FC } from 'react'
import { Container, NavLink } from './styled'
import { useLocation } from 'react-router-dom'

type Option = {
  url: string
  label: string
}

type Props = {
  options: Array<Option>
}

const Navbar: FC<Props> = (props: Props) => {
  const { options } = props
  const location = useLocation()

  return (
    <Container>
      {options.map((option: Option) => (
        <NavLink
          key={option.label}
          to={process.env.PUBLIC_URL + option.url}
          active={
            location.pathname === process.env.PUBLIC_URL + option.url
              ? 'true'
              : 'false'
          }>
          {option.label}
        </NavLink>
      ))}
    </Container>
  )
}

export default Navbar
