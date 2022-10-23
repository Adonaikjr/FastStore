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

export function ComponentCategory() {
  return (
    <ContainerCategory id="category">
      <ContainerScroll>
        <li>
          <a href="/">Celulares e Dispositivos</a>
          <FcIphone size={24} />
        </li>
        <li>
          <a href="#casa">Casa e Decoração</a>
          <BsFillHouseFill size={24} />
        </li>

        <li>
          <a href="/">Acessórios de Moda</a>
          <FaGlasses size={24} />
        </li>
        <li>
          <a href="/">Computadores e Acessórios</a>
          <IoIosDesktop size={24} />
        </li>
        <li>
          <a href="#relogio">Relógios</a>
          <TbDeviceWatchStats2 size={24} />
        </li>
        <li>
          <a href="/">Jogos e Consoles</a>
          <SlGameController size={24} />
        </li>
        <li>
          <a href="/">Brinquedos e Hobbies</a>
          <MdToys size={24} />
        </li>
      </ContainerScroll>
      <Options>
        <CgScrollV />
      </Options>
    </ContainerCategory>
  )
}
