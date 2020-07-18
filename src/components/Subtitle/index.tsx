import styled from 'styled-components'

const Subtitle = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.lato};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.text};
`

export default Subtitle
