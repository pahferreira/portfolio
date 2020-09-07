import React, { FC } from 'react'
import {
  Container,
  NavLink,
  NavContainer,
  LanguageSelectorContainer,
  LanguageSelector,
} from './styled'
import { useLocation } from 'react-router-dom'
import { TLanguage, TLink } from 'types/layout'
import { MdLanguage } from 'react-icons/md'
import { useLanguage } from 'hooks/useLanguage'

type Props = {
  options: Array<TLink>
  languages: Array<TLanguage>
}

const Navbar: FC<Props> = (props: Props) => {
  const { options, languages } = props
  const location = useLocation()
  const { currentLanguage, setCurrentLanguage } = useLanguage()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentLanguage(e.target.value)

  return (
    <Container>
      <NavContainer>
        {options.map((option: TLink) => (
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
      </NavContainer>
      <LanguageSelectorContainer>
        <MdLanguage size={18} color="#5E548E" />
        <LanguageSelector
          value={currentLanguage}
          onChange={handleLanguageChange}>
          {languages.map((language) => (
            <option key={language.value} value={language.value}>
              {language.label}
            </option>
          ))}
        </LanguageSelector>
      </LanguageSelectorContainer>
    </Container>
  )
}

export default Navbar
