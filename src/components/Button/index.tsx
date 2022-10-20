import { ContainerButton } from './styled'

interface type_btn {
  title: any
  icon?: any
  link?: any
  children?: any
}

export function Button({
  title,
  icon: Icon,
  link,
  children,
  ...rest
}: type_btn) {
  return (
    <ContainerButton {...rest}>
      {link}
      {Icon && <Icon size={24} />}
      {title}
      {children}
    </ContainerButton>
  )
}
