import React, { FC } from 'react'
import { useMediaQuery } from '@material-ui/core'
import ResponsiveMenu from './ResponsiveMenu'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { TStore } from 'types/storage'
import { TState as TLayoutState } from 'types/layout'

const Header: FC = () => {
  const { header } = useSelector<TStore, TLayoutState>((state) => state.layout)
  const matches = useMediaQuery('(max-width: 475px)')

  return matches ? (
    <ResponsiveMenu options={header.link} />
  ) : (
    <Navbar options={header.link} />
  )
}

export default Header
