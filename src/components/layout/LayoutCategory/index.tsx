import { Outlet } from 'react-router-dom'
import { ComponentCategory } from '../../Category'

export function LayoutCategory() {
  return (
    <>
      <ComponentCategory />
      <Outlet />
    </>
  )
}
