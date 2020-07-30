import styled from 'styled-components'

type TitleProps = {
  textTransform?: string
}

const Title = styled.p<TitleProps>`
  margin: 20px 0;
  font-family: ${({ theme }) => theme.fontFamilies.nunito};
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : 'none'};
  text-align: center;
  @media screen and (max-width: 475px) {
    text-align: left;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 400px) {
    text-align: left;
    font-size: 2rem;
    line-height: 3rem;
  }
`

export default Title
