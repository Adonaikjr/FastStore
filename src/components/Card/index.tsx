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
      <section>{img}</section>
      <h3>{title}</h3>
      <p>{text}</p>
      <h4>{value}</h4>
      <Button title={redirect} />
    </ContainerCard>
  )
}
