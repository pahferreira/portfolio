import styled from 'styled-components'

export const Section = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const AboutContent = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80%;
  padding: 20px 30px;
  position: absolute;
  z-index: 1;
`

export const Image = styled.div`
  width: 52.5%;
  height: 520px;
  background-image: url('profile.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  left: 50%;
`
