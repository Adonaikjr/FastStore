import styled from 'styled-components'

export const ContainerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

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
