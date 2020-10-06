import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 0 4%;
  @media screen and (max-width: 960px) {
    padding: 8% 0 5% 0;
  }
  @media screen and (max-width: 768px) {
    padding: 11% 0 5% 0;
  }
`

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    min-height: 90vh;
  }
`

export const ProjectsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
`

export const ProjectContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 55%;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`

type ImageProps = {
  source: string
}

export const ProjectImage = styled.div<ImageProps>`
  width: 40%;
  background-image: url(${({ source }) => source});
  height: 100%;
  height: 360px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  @media screen and (max-width: 750px) {
    width: 100%;
    height: 300px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 570px) {
    height: 200px;
  }
  @media screen and (max-width: 400px) {
    height: 150px;
  }
`

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const GalleryImage = styled.div<ImageProps>`
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-image: url(${({ source }) => source});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-right: 5%;
  @media screen and (max-width: 750px) {
    margin: 0 10px 10px 0;
  }
`

export const GalleryVideo = styled.div`
  cursor: pointer;
  width: 60px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    margin: 0 10px 10px 0;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 6px 0 0;
`

export const Label = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 10px;
`
export const Link = styled.a`
  text-decoration: underline;
`
export const Separator = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  margin-top: 40px;
`

type ProjectWrapperProps = {
  entered?: boolean
}
export const ProjectWrapper = styled.div<ProjectWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({ entered }) => (entered ? 1 : 0)};
  transition: opacity 300ms;
  padding-top: 100px;
`
