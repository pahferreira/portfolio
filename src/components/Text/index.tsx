import styled from 'styled-components'

type TextProps = {
  align?: string
}

const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fontFamilies.lato};
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ align }) => (align ? align : 'center')};
  margin: 2px 0;
  @media screen and (max-width: 475px) {
    text-align: left;
  }
`

export default Text
