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
    width: 100%;
    background: ${({ theme }) => theme.buttonYellow};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    :hover {
      background-color: ${({ theme }) => theme.buttonYellowDark};
    }
    a:link,
    a:visited {
      font-size: 20px;
      color: ${({ theme }) => theme.white};
      width: 100%;
      height: 100%;
    }
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid transparent;
  height: 20rem;
  margin: 1rem 0rem 1rem 0rem;
  width: 30rem;
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
`
