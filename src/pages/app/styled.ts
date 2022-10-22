import styled from 'styled-components'
import { ContainerButton } from '../../components/Header/styled'

export const ContainerApp = styled.main`
  width: 100%;
`
export const Section = styled.section`
  //border: solid transparent;
  background-color: ${({ theme }) => theme.colorInput};
  border: solid transparent;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  img {
    height: 20rem;
  }
`
export const ContainerNewButton = styled(ContainerButton)`
  button {
    display: flex;
    align-items: center;
    width: 60%;
    background: ${({ theme }) => theme.buttonYellow};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    :hover {
      background-color: ${({ theme }) => theme.buttonYellowDark};
    }
    display: flex;
    justify-content: center;
    a:link,
    a:visited {
      font-size: 20px;
      color: ${({ theme }) => theme.white};
    }
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid transparent;
  height: 20rem;
  margin: 1rem 0rem 1rem 1rem;
  width: 30rem;
  span {
    //styleName: Title/Title XL;
    font-family: Baloo 2;
    font-size: 33px;
    font-weight: 800;
    line-height: 62px;
    letter-spacing: 0em;
    text-align: left;
    animation-name: animation;
    animation-duration: 1s;
    position: relative;

    @keyframes animation {
      0% {
        left: -200px;
        top: 0px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    }
  }
  h1 {
    animation-name: animationText;
    animation-duration: 1.5s;
    position: relative;

    @keyframes animationText {
      0% {
        left: 200px;
        top: 0px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    }
  }
  p {
    //styleName: Text/Regular L;
    margin-top: 1rem;
    font-family: Roboto;
    animation-name: animationText;
    animation-duration: 2s;
    position: relative;

    @keyframes animationText {
      0% {
        left: -200px;
        top: 0px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
`
