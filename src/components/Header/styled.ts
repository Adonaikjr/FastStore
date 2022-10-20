import styled from 'styled-components'
import logo from '../../assets/logo.png'

export const ContainerHeader = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`
export const Nav = styled.div`
  width: 350px;
  background: transparent;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;

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
    background-color: ${({ theme }) => theme.buttonYellow};
    :hover {
      transition: 2s;
      background-color: ${({ theme }) => theme.buttonYellowDark};
    }
  }

  //border: solid 1px ${({ theme }) => theme.white};
`
