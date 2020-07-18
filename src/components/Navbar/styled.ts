import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

export const Container = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  height: 10vh;
  position: absolute;
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
