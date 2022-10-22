import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '../components/layout/Default'
import { LayoutCategory } from '../components/layout/LayoutCategory'
import { About } from '../pages/about'
import { App } from '../pages/app/App'
import { Category } from '../pages/category'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />

        <Route path="/category" element={<LayoutCategory />}>
          <Route path="/category" element={<Category />} />
        </Route>
      </Route>
    </Routes>
  )
}
