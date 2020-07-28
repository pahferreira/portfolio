import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 960px) {
    padding: 15% 0 5% 0;
  }
`

export const Content = styled.div`
  min-height: 80vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 960px) {
    min-height: 90vh;
  }
`

export const SectionsContainer = styled.div`
  min-height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const Section = styled.div`
  width: 33%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
    align-self: center;
  }
  @media screen and (max-width: 475px) {
    width: 100%;
    align-self: flex-start;
  }
`
