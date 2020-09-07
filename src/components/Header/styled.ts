import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  height: 10vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
type ButtonProps = {
  active: string
}

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  min-width: 400px;
`

export const NavLink = styled(Link)<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ active, theme }) =>
    active === 'true' ? theme.colors.secondary : theme.colors.primary};
  margin: 0px 20px;
`

export const MenuButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.secondary} !important;
  position: absolute !important;
  top: 10px;
  right: 10px;
  z-index: 3;
`

type MenuContainerProps = {
  open: boolean
}

export const MenuOverlay = styled.div<MenuContainerProps>`
  width: 100%;
  z-index: 1;
  height: 107vh;
  position: absolute !important;
  background-color: rgba(17, 17, 17, 0.6);
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 0.5s ease-in-out;
`

export const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 50vh;
  width: 85%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  clip-path: circle(
    ${({ open }) => (open ? '200% at 90% -10%' : '0 at 90% -10%')}
  );
  -webkit-clip-path: circle(
    ${({ open }) => (open ? '200% at 90% -10%' : '0 at 90% -10%')}
  );
  transition: all 0.5s ease-in-out;
`
export const MenuOption = styled(Link)<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ active, theme }) =>
    active === 'true' ? theme.colors.secondary : theme.colors.primary};
  margin: 10px;
`

export const LanguageSelector = styled.select`
  margin-left: 10px;
  padding: 1px 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  option {
    color: ${({ theme }) => theme.colors.primary};
    background: transparent;
    min-height: 20px;
    padding: 0px 2px 1px;
    border: none;
    outline: 0px;
  }
`

export const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Separator = styled.div`
  height: 1px;
  width: 180px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const LanguageOption = styled.div<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ active, theme }) =>
    active === 'true' ? theme.colors.secondary : theme.colors.primary};
  margin: 10px;
`
