import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  height: 10vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
type NavLinkProps = {
  active: string
}

export const NavLink = styled(Link)<NavLinkProps>`
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
  z-index: 2;
`

type MenuContainerProps = {
  open: boolean
}

export const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  clip-path: circle(
    ${({ open }) => (open ? '200% at 90% -10%' : '0 at 90% -10%')}
  );
  -webkit-clip-path: circle(
    ${({ open }) => (open ? '200% at 90% -10%' : '0 at 90% -10%')}
  );
  transition: all 0.5s ease-in-out;
`
export const MenuOption = styled(Link)<NavLinkProps>`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ active, theme }) =>
    active === 'true' ? theme.colors.secondary : theme.colors.primary};
  margin: 20px;
`
