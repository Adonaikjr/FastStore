import { Button } from '../Button'
import { ContainerCard } from './styled'

interface types_props {
  title: string
  text: string
  img: any
  redirect: any
  value?: any
}

export function Cards({ img, title, text, redirect, value }: types_props) {
  return (
    <ContainerCard>
      <h3>{title}</h3>
      {img}
      <p>{text}</p>
      <p>{value}</p>
      <Button title={redirect} />
    </ContainerCard>
  )
}
