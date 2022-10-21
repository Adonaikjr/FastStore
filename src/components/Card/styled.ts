import styled from 'styled-components'
export const ContainerCard = styled.div`
  background: #fff;
  width: 15rem;
  padding: 1rem;
  height: 28rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  border: solid transparent;
  h3 {
    //styleName: Title/Title S;
font-family: Baloo 2;
font-size: 20px;
font-weight: 700;
line-height: 26px;
letter-spacing: 0em;
text-align: center;

  }
  section {
    height: 12rem;
  }
  img {
    border: solid transparent;
    height: 10rem;

    :hover {
      height: 12rem;
    }
  }
  p {
    margin: 0rem 0rem 0.5rem 0rem;
    border: solid transparent;
  }
  button {
    border: solid transparent;
    text-align: center;
    background-color: ${({ theme }) => theme.buttonYellow};
    margin-top: 1rem;
    font-size: 16px;
    :hover {
      transition: 10ms;
      background-color: ${({ theme }) => theme.buttonYellowDark};
    }

    a:link,
    a:visited {
      font-size: 20px;
      color: #fff;
    }
  }
`
