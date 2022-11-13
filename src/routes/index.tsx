import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '../components/layout/Default'
import { LayoutCategory } from '../components/layout/LayoutCategory'
import { About } from '../pages/about'
import { App } from '../pages/app/App'
import { Category } from '../pages/category'
import { CategorySaude } from '../components/products/saude'
import { CategoryRelogios } from '../components/products/Relogios'
import { CategoryHouse } from '../components/products/casa'
import { CategoryCelulares } from '../components/products/celulares'
import { CategoryAcessoriosDeModa } from '../components/products/modaAcessorios'
import { CategoryBlackFriday } from '../components/products/black'
import { CategoryComputadores } from '../components/products/computadores'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<LayoutCategory />}>
          <Route path="/category" element={<Category />} />
          <Route path="black" element={<CategoryBlackFriday />} />
          <Route path="saude" element={<CategorySaude />} />
          <Route path="relogio" element={<CategoryRelogios />} />
          <Route path="casa_decoracao" element={<CategoryHouse />} />
          <Route path="computadores" element={<CategoryComputadores />} />
          <Route path="celulares_acessorios" element={<CategoryCelulares />} />
          <Route
            path="moda_acessorios"
            element={<CategoryAcessoriosDeModa />}
          />
        </Route>
      </Route>
    </Routes>
  )
}
