import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.p`
  margin: 5px 0;
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
export const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 20px;
  text-decoration: underline;
`
