import { ContainerFooter, Backgroundlogo, Nav } from './styled'

export function Footer() {
  return (
    <ContainerFooter>
      <Backgroundlogo />
      <Nav>
        <ul>
          <li>
            <h2>Redes Sociais</h2>
          </li>
          <li>
            <a href="https://www.instagram.com/virtual.pop.store">Instagram</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@fastpopstore?lang=pt_BR">Tiktok</a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100086885026345">
              Facebook
            </a>
          </li>
        </ul>
      </Nav>
    </ContainerFooter>
  )
}
