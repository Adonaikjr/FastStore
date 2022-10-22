import styled, { keyframes } from 'styled-components'

export const ContainerCategory = styled.nav`
  margin: 1rem;
  border: solid transparent;
  overflow-y: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`

export const ContainerScroll = styled.ul`
  width: 100%;
  gap: 1rem;
  height: 8vh;
  display: flex;
  list-style: none;
  border: solid transparent;
  a:link,
  a:visited {
    padding: 1rem;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
  }

  li {
    background-color: ${({ theme }) => theme.purple};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
    display: flex;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: solid transparent;
    align-items: center;
    padding: 1.4rem;
    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
const animation = keyframes`
  0%   {left: 0px;}
  25%  {left: 150px;}
  50%  {left: 0px;}
  75%  {left: -150px;}
  100%  {left: 0px;}
`
export const Options = styled.div`
  border: solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transform: rotate(90deg);
    border: solid transparent;
    position: relative;
    animation: ${animation} 3s infinite;
    font-size: 24px;
  }
`
