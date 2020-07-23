import styled from 'styled-components'

const Note = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.lato};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 0;
`

export default Note
