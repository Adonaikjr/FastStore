import { ContainerHeader, Backgroundlogo, Nav, ContainerButton } from './styled'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export function Header() {
  return (
    <ContainerHeader>
      <Backgroundlogo />
      <Nav>
        <ul>
          <li>
            <Link to="/">Inicío</Link>
          </li>
          <li>
            <Link to="/">Sobre</Link>
          </li>
          <li>
            <Link to="/">Serviços</Link>
          </li>
          <li>
            <Link to="/">Depoimentos</Link>
          </li>
        </ul>
      </Nav>
      <ContainerButton>
        <Button title={<a href="##">Grupo Telegram</a>} />
      </ContainerButton>
    </ContainerHeader>
  )
}
