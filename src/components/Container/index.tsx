import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 960px) {
    padding: 8% 0 5% 0;
  }
  @media screen and (max-width: 768px) {
    padding: 11% 0 5% 0;
  }
`

export default Container
