import { ContainerCategory, ContainerScroll, Options } from './styled'
import {
  FcIphone,
  BsFillHouseFill,
  FaGlasses,
  IoIosDesktop,
  TbDeviceWatchStats2,
  SlGameController,
  MdToys,
  CgScrollV,
} from 'react-icons/all'
import { Link } from 'react-router-dom'
export function ComponentCategory() {
  return (
    <ContainerCategory>
      <ContainerScroll>
        <li>
          <Link to="/">Celulares e Dispositivos</Link>
          <FcIphone size={24} />
        </li>
        <li>
          <Link to="/">Casa e Decoração</Link>
          <BsFillHouseFill size={24} />
        </li>

        <li>
          <Link to="/">Acessórios de Moda</Link>
          <FaGlasses size={24} />
        </li>
        <li>
          <Link to="/">Computadores e Acessórios</Link>
          <IoIosDesktop size={24} />
        </li>
        <li>
          <Link to="">Relógios</Link>
          <TbDeviceWatchStats2 size={24} />
        </li>
        <li>
          <Link to="/">Jogos e Consoles</Link>
          <SlGameController size={24} />
        </li>
        <li>
          <Link to="/">Brinquedos e Hobbies</Link>
          <MdToys size={24} />
        </li>
      </ContainerScroll>
      <Options>
        <CgScrollV />
      </Options>
    </ContainerCategory>
  )
}
