import styled from 'styled-components'

const SectionTitle = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.nunito};
  font-size: ${({ theme }) => theme.fontSizes.sectionTitle};
  color: ${({ theme }) => theme.colors.lightPrimary};
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`

export default SectionTitle
