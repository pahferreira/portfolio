import styled from 'styled-components'

export const Section = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (min-width: 1600px) {
    margin-top: 5%;
  }
`

export const AboutContent = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 90%;
  padding: 20px 30px;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (min-width: 1600px) {
    padding: 40px;
  }
`

type ImageProps = {
  image: string
}

export const Image = styled.div<ImageProps>`
  width: 52.5%;
  height: 434px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  left: 50%;
  @media screen and (min-width: 1600px) {
    height: 500px;
  }
`

export const MobileSection = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 475px) {
    align-items: flex-start;
  }
`

export const MobileHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 475px) {
    flex-direction: row;
    width: 98%;
    margin-top: 40px;
  }
`

export const MobileImage = styled.div<ImageProps>`
  width: 200px;
  height: 200px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 300px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: 22px;
  @media screen and (max-width: 475px) {
    width: 50%;
    margin-right: 10%;
  }
  @media screen and (max-width: 430px) {
    width: 150px;
    height: 150px;
    margin-right: 5%;
  }
  @media screen and (max-width: 400px) {
    width: 130px;
    height: 130px;
  }
`

export const MobileLabelContainer = styled.div`
  width: 45%;
`

export const MobileAbountContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90%;
  padding: 20px 30px;
  @media screen and (max-width: 475px) {
    padding: 20px 0;
  }
`
