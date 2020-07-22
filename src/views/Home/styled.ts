import styled, { keyframes } from 'styled-components'
import { Theme } from 'utils/theme'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const blink = ({ theme }: { theme: Theme }) => keyframes`
  0% { background-color: ${theme.colors.secondary} }
  49% { background-color: ${theme.colors.secondary} }
  50% { background-color: ${theme.colors.background} }
  99% { background-color: ${theme.colors.background} }
  100% { background-color: ${theme.colors.secondary} }
`

type CursorProps = {
  typing?: boolean
}

export const Cursor = styled.span<CursorProps>`
  display: inline-block;
  width: 3px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-left: 5px;
  animation: ${blink} 1s infinite;
`
