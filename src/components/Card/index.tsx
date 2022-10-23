import { Button } from '../Button'
import { ContainerCard } from './styled'

interface types_props {
  title: any
  text: any
  img?: any
  redirect: any
  value?: any
}

export function Cards({ img, title, text, redirect, value }: types_props) {
  return (
    <ContainerCard>
      <h3>{title}</h3>
      <section>{img}</section>
      <p>{text}</p>
      <p>{value}</p>
      <Button title={redirect} />
    </ContainerCard>
  )
}
