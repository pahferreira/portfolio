import React, { FC } from 'react'
import { useMediaQuery } from '@material-ui/core'
import ResponsiveMenu from './ResponsiveMenu'
import Navbar from './Navbar'

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
]

const Header: FC = () => {
  const matches = useMediaQuery('(max-width: 475px)')

  return matches ? (
    <ResponsiveMenu options={OPTIONS} />
  ) : (
    <Navbar options={OPTIONS} />
  )
}

export default Header
