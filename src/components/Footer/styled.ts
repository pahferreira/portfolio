import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  padding: 0 20px;
`

type TextProps = {
  alignSelf?: boolean
}

export const Text = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamilies.lato};
  font-size: ${({ theme }) => theme.fontSizes.text};
  margin-right: ${({ alignSelf }) => (alignSelf ? '60px' : 0)};
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
  align-items: center;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
`
