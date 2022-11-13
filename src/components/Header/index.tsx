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
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/category">Categorias</Link>
          </li>
          <li>
            <Link to="/category/black">Black Friday</Link>
          </li>
        </ul>
      </Nav>
      <ContainerButton>
        <Button
          title={<a href="https://t.me/+DOzQWh1Tv540MDNh">Grupo Telegram</a>}
        />
      </ContainerButton>
    </ContainerHeader>
  )
}
