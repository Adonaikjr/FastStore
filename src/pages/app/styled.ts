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

  img {
    height: 20rem;
  }
`
export const ContainerNewButton = styled(ContainerButton)`
  button {
    width: 100%;
    box-shadow: 0px 1px 10px ${({ theme }) => theme.colorShadow};
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
