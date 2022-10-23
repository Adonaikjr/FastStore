import styled, { keyframes } from 'styled-components'

export const ContainerCategory = styled.nav`
  margin: 1rem;
  padding: 1rem;
  border: solid transparent;
  overflow-y: auto;
  scroll-behavior: smooth;
  background-color: none;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContainerScroll = styled.ul`
  width: 100%;
  gap: 1rem;
  height: 8vh;
  display: flex;
  list-style: none;
  border: none;
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
    border: none;
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
  padding-top: 1rem;
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
