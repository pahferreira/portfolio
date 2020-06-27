import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const Container = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 10vh;
`
