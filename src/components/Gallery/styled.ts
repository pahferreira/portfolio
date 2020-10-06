import styled from 'styled-components'

type ContainerProps = {
  visible: boolean
}
export const Container = styled.div<ContainerProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 5;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: all 1000ms easy-in-out;
  background-color: ${({ theme }) => theme.colors.overlay};
  left: 0;
  top: 0;
`

export const Header = styled.div`
  display: flex;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 4%;
  height: 80%;
  width: 100%;
  z-index: 1;
  @media screen and (max-width: 575px) {
    padding: 0;
  }
`

export const ImageElement = styled.img`
  width: auto;
  height: 100%;
`

export const VideoElement = styled.video`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 790px) {
    width: 100%;
    height: 90%;
  }
`

type NavigatorWrapperProps = {
  position?: 'left' | 'right'
}
export const NavigatorWrapper = styled.div<NavigatorWrapperProps>`
  @media screen and (max-width: 790px) {
    position: absolute;
    bottom: 5%;
    left: ${({ position }) => position === 'left' && '5%'};
    right: ${({ position }) => position === 'right' && '5%'};
  }
`
