import styled from 'styled-components'

const Subtitle = styled.p`
  margin: 15px 0;
  font-family: ${({ theme }) => theme.fontFamilies.nunito};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  text-align: center;
`

export default Subtitle
