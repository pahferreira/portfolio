import styled from 'styled-components'

const Title = styled.p`
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

export default Title
