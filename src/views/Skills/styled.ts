import styled from 'styled-components'

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
  @media screen and (min-width: 1600px) {
    margin-top: 5%;
  }
`

export const Container = styled.div`
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
