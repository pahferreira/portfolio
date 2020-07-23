import styled from 'styled-components'

const Title = styled.p`
  margin: 20px 0;
  font-family: ${({ theme }) => theme.fontFamilies.nunito};
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  text-align: center;
`

export default Title
