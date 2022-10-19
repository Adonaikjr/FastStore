import styled from 'styled-components'
import logo from '../../assets/logo.png'

export const ContainerHeader = styled.header`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Nav = styled.div`
  width: 350px;
  background: transparent;
  height: 100%;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    height: 100%;
    li {
      a {
        color: ${({ theme }) => theme.gray_headline};
        text-decoration: none;
        display: flex;
        align-items: center;
        border: solid transparent;
        height: 100%;
        :hover {
          border-bottom: solid ${({ theme }) => theme.brand_green};
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
  height: 100%;
  width: 9rem;
`
export const ContainerButton = styled.div`
  width: 190px;

  //border: solid 1px ${({ theme }) => theme.white};
`
