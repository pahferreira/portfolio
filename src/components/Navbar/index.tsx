import React, { FC } from 'react'
import { Container, NavLink } from './styled'

type Option = {
  url: string
  label: string
}

const OPTIONS = [
  {
    url: '/portfolio',
    label: 'Home',
  },
  {
    url: '/portfolio/about',
    label: 'About',
  },
  {
    url: '/portfolio/projects',
    label: 'Projects',
  },
  {
    url: '/portfolio/skills',
    label: 'Skills',
  },
  {
    url: '/portfolio/contact',
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
