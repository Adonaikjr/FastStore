import styled from 'styled-components'
import mask from '../../assets/mask.svg'
export const ContainerApp = styled.main`
  width: 100%;
`

export const Section = styled.section`
  border: solid trasnparent;
  margin-top: -5rem;
  padding-top: 5rem;
  height: 40rem;

  p,
  h1 {
    margin: 1rem 0rem 1rem 0rem;
  }

  //border: solid transparent;
  background: ${({ theme }) => theme.brand_green_light};
  div {
    margin-top: -5rem;
    border: solid transparent;
    width: 50%;
    display: flex;
    margin-top: 123px;
    margin-left: 123px;
    button {
      margin: 2rem 0rem 2rem 0rem;
      background-color: ${({ theme }) => theme.orange};
      box-shadow: 0px 0.5px 5px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
`

export const Background = styled.div`
  margin-top: -40rem;
  border: solid transparent;
  height: 100vh;
  width: 50%;
  margin-left: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${mask});
`

export const Banners = styled.div`
  box-shadow: 0px 0px 10px;
  border-radius: 16px;
  background: ${({ theme }) => theme.brand_beige};
  padding: 1rem;
  margin: -100px 123px 0px 123px;
  height: 100%;
  border: solid 1px transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  div {
    border: solid 1px transparent;
    height: 10rem;
    width: 18rem;
    margin: 1rem;
    img {
      border-radius: 5px;
      height: 10rem;
      width: 18rem;
    }
  }
  span {
    border: solid 1px ${({ theme }) => theme.brand_green_hover};
    height: 100px;
  }
`
