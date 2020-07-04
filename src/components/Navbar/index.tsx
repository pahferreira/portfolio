import React, { FC } from 'react'
import { Container, NavLink } from './styled'

type Option = {
  url: string
  label: string
}

const OPTIONS = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: '/projects',
    label: 'Projects',
  },
  {
    url: '/skills',
    label: 'Skills',
  },
  {
    url: '/contact',
    label: 'Contact',
  },
]

const Navbar: FC = () => {
  return (
    <Container container direction="row" justify="flex-end">
      {OPTIONS.map((option: Option) => (
        <NavLink
          key={option.label}
          to={option.url}
          active={window.location.pathname === option.url ? 'true' : 'false'}>
          {option.label}
        </NavLink>
      ))}
    </Container>
  )
}

export default Navbar
