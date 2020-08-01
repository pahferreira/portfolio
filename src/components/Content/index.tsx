import styled from 'styled-components'

const Content = styled.div`
  min-height: 80vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    min-height: 90vh;
  }
`

export default Content
