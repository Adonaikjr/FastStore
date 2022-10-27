import styled from 'styled-components'
export const ContainerCard = styled.div`
  background: #fff;
  width: 15rem;
  padding: 5px;
  height: 28rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3px;
  border: solid transparent;

  @media (max-width: 600px) {
    width: 10rem;

    img {
      border: solid transparent;
      height: 100%;
      width: 100%;
      border-radius: 5px;
      :hover {
        border: none;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        width: 100%;
        height: 100%;
      }
    }
  }

  //end midia
  h3 {
    //styleName: Title/Title S;
    font-family: Baloo 2;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
  h4 {
    text-align: center;
    font-size: 20px;
    color: ${({ theme }) => theme.purpleDark};
  }
  section {
    border: solid transparent;
    height: 15rem;
    img {
      border: solid transparent;
      height: 100%;
      width: 100%;
    }
  }

  p {
    margin: 0rem 0rem 0.5rem 0rem;
    border: solid transparent;
  }
  button {
    border: none;
    text-align: center;
    background-color: ${({ theme }) => theme.buttonYellow};
    color: ${({ theme }) => theme.purpleDark};
    margin-top: 1rem;
    font-size: 16px;
    :hover {
      transition: 10ms;
      background-color: ${({ theme }) => theme.buttonYellowDark};
    }

    a:link,
    a:visited {
      font-size: 20px;
      color: ${({ theme }) => theme.brand_beige};
      width: 100%;
    }
  }
`
