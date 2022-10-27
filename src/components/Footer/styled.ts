import styled from 'styled-components'
import logo from '../../assets/logo.png'

export const ContainerFooter = styled.footer`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.purpleDark};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-top: 3rem;
`
export const Nav = styled.div`
  width: 350px;
  background: transparent;
  h2 {
    color: white;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      border: solid transparent;
      a {
        color: ${({ theme }) => theme.white};
        text-decoration: none;
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
  height: 120px;
  width: 120px;
  border: solid transparent;
  background-color: white;
  border-radius: 50%;
`
