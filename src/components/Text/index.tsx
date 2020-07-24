import styled from 'styled-components'

const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.lato};
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 2px 0;
  @media screen and (max-width: 475px) {
    text-align: left;
  }
`

export default Text
