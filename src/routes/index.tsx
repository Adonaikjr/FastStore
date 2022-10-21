import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '../components/layout/Default'
import { About } from '../pages/about'
import { App } from '../pages/app/App'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
