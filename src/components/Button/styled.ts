import styled from 'styled-components'

export const ContainerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;

  cursor: pointer;
  border-radius: 18px;
  border: transparent;
  svg {
    margin: 5px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    text-decoration: none;
  }
`
