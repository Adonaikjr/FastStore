import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'
import { ContainerLayoutDefault } from './styled'
import { ComponentCategory } from '../../Category'
export function LayoutDefault() {
  return (
    <ContainerLayoutDefault>
      <Header />
      <ComponentCategory />
      <Outlet />
    </ContainerLayoutDefault>
  )
}
