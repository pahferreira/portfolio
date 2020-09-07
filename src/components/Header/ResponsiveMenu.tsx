import React, { FC, useState } from 'react'
import {
  MenuButton,
  MenuContainer,
  MenuOption,
  Separator,
  LanguageOption,
  MenuOverlay,
} from './styled'
import MenuIcon from '@material-ui/icons/Menu'
import { useLocation } from 'react-router-dom'
import { TLanguage, TLink } from 'types/layout'

type Props = {
  options: Array<TLink>
  languages: Array<TLanguage>
  currentLanguage: string
  setCurrentLanguage: (language: string) => void
}

const ResponsiveMenu: FC<Props> = (props: Props) => {
  const { options, languages, currentLanguage, setCurrentLanguage } = props
  const [open, setOpen] = useState<boolean>(false)
  const location = useLocation()

  const handleClick = () => setOpen(false)

  const handleLanguageClick = (language: string) => setCurrentLanguage(language)

  return (
    <>
      <MenuButton onClick={() => setOpen((prevState: boolean) => !prevState)}>
        <MenuIcon />
      </MenuButton>
      <MenuOverlay open={open} onClick={handleClick} />
      <MenuContainer open={open}>
        {options.map((option: TLink) => (
          <MenuOption
            onClick={handleClick}
            key={option.label}
            to={process.env.PUBLIC_URL + option.url}
            active={
              location.pathname === process.env.PUBLIC_URL + option.url
                ? 'true'
                : 'false'
            }>
            {option.label}
          </MenuOption>
        ))}
        <Separator />
        {languages.map((language: TLanguage) => (
          <LanguageOption
            key={language.value}
            active={currentLanguage === language.value ? 'true' : 'false'}
            onClick={() => handleLanguageClick(language.value)}>
            {language.label}
          </LanguageOption>
        ))}
      </MenuContainer>
    </>
  )
}

export default ResponsiveMenu
