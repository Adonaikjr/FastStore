import styled from 'styled-components'
import { Box, Section } from '../app/styled'

export const ContainerAbout = styled.div``

export const NewSection = styled(Section)`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  align-items: center;
  img {
    height: 8rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    -moz-transition: 0.5s;
    transition: 0.5s;
    :hover {
      -webkit-transform: translateY(-8px);
      -moz-transform: translateY(-8px);
      -ms-transform: translateY(-8px);
      -o-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
`

export const NewBox = styled(Box)``
