import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.p`
  margin: 10px 0;
  font-family: ${({ theme }) => theme.fontFamilies.nunito};
  font-size: ${({ theme }) => theme.fontSizes.sectionTitle};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`

export const Subtitle = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.lato};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.text};
`

const blink = keyframes`
  0% { opacity: 1 }
  49% { opacity: 1 }
  50% { opacity: 0 }
  99% { opacity: 0 }
  100% { opacity: 1 }
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
  animation: ${({ typing }) => typing && 'none'};
`
