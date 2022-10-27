import { Outlet } from 'react-router-dom'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
import { ContainerLayoutDefault } from './styled'
export function LayoutDefault() {
  return (
    <ContainerLayoutDefault>
      <Header />
      <Outlet />
      <Footer />
    </ContainerLayoutDefault>
  )
}
