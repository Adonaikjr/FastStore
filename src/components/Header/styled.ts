import styled from 'styled-components'
import logo from '../../assets/logo.png'

export const ContainerHeader = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const Nav = styled.div`
  width: 350px;
  background: transparent;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;

    li {
      a {
        color: ${({ theme }) => theme.purpleDark};
        text-decoration: none;
        display: flex;
        align-items: center;
        border: solid transparent;
        height: 4rem;

        :hover {
          border-bottom: solid ${({ theme }) => theme.purple};
        }
      }
    }
  }
`

export const Backgroundlogo = styled.div`
  margin: 1rem;
  background: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 9rem;
`
export const ContainerButton = styled.div`
  button {
    width: 190px;
    margin: 1rem 0rem 1rem 0rem;
    font-size: 16px;
    background-color: ${({ theme }) => theme.purple};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
    a:link,
    a:visited {
      font-size: 16px;
      color: #fff;
    }
    :hover {
      transition: 2s;
      background-color: ${({ theme }) => theme.purpleLight};
    }
  }

  //border: solid 1px ${({ theme }) => theme.white};
`
