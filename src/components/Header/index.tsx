import React, { FC } from 'react'
import { useMediaQuery } from '@material-ui/core'
import ResponsiveMenu from './ResponsiveMenu'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { TStore } from 'types/storage'
import { TState as TLayoutState } from 'types/layout'
import { useLanguage } from 'hooks/useLanguage'

const Header: FC = () => {
  const { header } = useSelector<TStore, TLayoutState>((state) => state.layout)
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const matches = useMediaQuery('(max-width: 570px)')

  return matches ? (
    <ResponsiveMenu
      options={header.link}
      languages={header.language}
      currentLanguage={currentLanguage}
      setCurrentLanguage={setCurrentLanguage}
    />
  ) : (
    <Navbar options={header.link} languages={header.language} />
  )
}

export default Header
