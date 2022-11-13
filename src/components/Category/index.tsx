import { ContainerCategory, ContainerScroll, Options } from './styled'
import {
  FcIphone,
  BsFillHouseFill,
  FaGlasses,
  IoIosDesktop,
  TbDeviceWatchStats2,
  SlGameController,
  CgScrollV,
} from 'react-icons/all'
import { Link } from 'react-router-dom'

export function ComponentCategory() {
  return (
    <ContainerCategory id="category">
      <ContainerScroll>
        <li>
          <Link to="/category/celulares_acessorios">
            Celulares e Dispositivos
          </Link>
          <FcIphone size={24} />
        </li>
        <li>
          <Link to="/category/casa_decoracao">Casa e Decoração</Link>
          <BsFillHouseFill size={24} />
        </li>
        <li>
          <Link to="/category/saude">Saúde</Link>
          ❤️
        </li>
        <li>
          <Link to="/category/moda_acessorios">Acessórios de Moda</Link>
          <FaGlasses size={24} />
        </li>

        <li>
          <Link to="/category/relogio">Relógios</Link>
          <TbDeviceWatchStats2 size={24} />
        </li>
        <li>
          <Link to="/">Jogos e Consoles</Link>
          <SlGameController size={24} />
        </li>

        <li>
          <Link to="/category/computadores">Computadores e Acessórios</Link>
          <IoIosDesktop size={24} />
        </li>
      </ContainerScroll>
      <Options>
        <CgScrollV />
      </Options>
    </ContainerCategory>
  )
}
